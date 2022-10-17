import { Form } from 'antd';
import clsx from 'clsx';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';

type FormState<T> = {
  errors?: FormikErrors<T>;
  touchedFields: FormikTouched<T>;
  isSubmitted?: boolean;
};

interface Props<T> {
  className?: string;
  children: React.ReactNode;
  label?: string;
  errorMsg?: string;
  formState?: FormState<T>;
  name: keyof T;
}

declare const ValidateStatuses: ['success', 'warning', 'error', 'validating', ''];
export declare type ValidateStatus = typeof ValidateStatuses[number];

function getValidateResult<T>(formState?: FormState<T>, name?: keyof T): { validateStatus: ValidateStatus; help?: string } {
  if (!formState) {
    return {
      validateStatus: '',
      help: '',
    };
  }

  if (!name) {
    return {
      validateStatus: '',
      help: '',
    };
  }

  if (!formState.touchedFields[name]) {
    return {
      validateStatus: '',
      help: '',
    };
  }

  if (formState.errors?.[name]) {
    return {
      validateStatus: 'error',
      help: formState.errors[name] as string,
    };
  }

  return {
    validateStatus: 'success',
    help: '',
  };
}

export function FormControl<T>({ className, children, label, formState, name }: Props<T>) {
  return (
    <Form.Item label={label} {...getValidateResult<T>(formState, name)} className={clsx(className)}>
      {children}
    </Form.Item>
  );
}
