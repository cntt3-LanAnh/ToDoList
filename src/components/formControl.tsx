import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { Control, Controller, FieldPath, FieldValues, FormState, UseFormRegister } from 'react-hook-form';

interface Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  classes?: {
    root?: string;
    label?: string;
  };
  children: React.ReactElement;
  label?: string;
  errorMsg?: string;
  name: TName;
  layoutType?: 'horizontal' | 'vertical';
  required?: boolean;
  control: Control<TFieldValues> | UseFormRegister<TFieldValues>;
  formState: FormState<TFieldValues>;
}

declare const ValidateStatuses: ['success', 'warning', 'error', 'validating', ''];
export declare type ValidateStatus = typeof ValidateStatuses[number];

interface FormItemLayoutProps {
  classes?: {
    root?: string;
    label?: string;
  };
  children: ReactNode;
  label?: string;
  layoutType?: 'horizontal' | 'vertical';
  required?: boolean;
}

function FormItemLayout({ children, layoutType, label, classes, required }: FormItemLayoutProps) {
  if (!label) {
    return <>{children}</>;
  }

  if (layoutType === 'vertical') {
    return (
      <div className={clsx(classes?.root)}>
        <p className={clsx(classes?.label, 'mb-2')}>
          {label}
          {required && '*'}
        </p>
        {children}
      </div>
    );
  }

  return (
    <div className={clsx(classes?.root, 'flex items-center')}>
      <p className={clsx(classes?.label, 'ml-3 mb-6')}>
        {label}
        {required && '*'}
      </p>
      <div>{children}</div>
    </div>
  );
}

export function FormControl<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  classes,
  children,
  label,
  layoutType = 'vertical',
  required,
  control,
  name,
  formState,
}: Props<TFieldValues, TName>) {
  const messageError = formState.errors[name]?.message?.toString?.();

  return (
    <FormItemLayout layoutType={layoutType} classes={classes} label={label} required={required}>
      {typeof control === 'function' ? (
        React.cloneElement(children, { ...control(name), ...(messageError && { status: 'error' }) })
      ) : (
        <Controller
          control={control}
          name={name}
          render={(formProps) => React.cloneElement(children, { ...formProps.field, ...(messageError && { status: 'error' }) })}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={messageError}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
        >
          <p role="alert" className="text-error h-6 text-sm">
            {messageError}
          </p>
        </motion.div>
      </AnimatePresence>
    </FormItemLayout>
  );
}
