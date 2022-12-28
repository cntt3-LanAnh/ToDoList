import { Form } from 'antd';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Control, Controller, ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues, UseFormStateReturn } from 'react-hook-form';

type FormControlChildrenProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
};

interface Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  classes?: {
    root?: string;
    label?: string;
  };
  children: (props: FormControlChildrenProps<TFieldValues, TName>) => React.ReactElement;
  label?: string;
  errorMsg?: string;
  name: TName;
  layoutType?: 'horizontal' | 'vertical';
  required?: boolean;
  control?: Control<TFieldValues>;
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
        <p className={clsx(classes?.label, 'mb-3')}>
          {label}
          {required && '*'}
        </p>
        {children}
      </div>
    );
  }

  return (
    <div className={clsx(classes?.root, 'flex, flex-col')}>
      <p className={clsx(classes?.label, 'ml-3')}>
        {label}
        {required && '*'}
      </p>
      {children}
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
}: Props<TFieldValues, TName>) {
  return (
    <FormItemLayout layoutType={layoutType} classes={classes} label={label} required={required}>
      <Form.Item className={clsx({ '[&>div]:flex-col': layoutType === 'vertical' })}>
        <Controller control={control} name={name} render={(formProps) => children(formProps)} />
      </Form.Item>
    </FormItemLayout>
  );
}
