export {};

declare module 'react' {
  interface FunctionComponent {
    layout?: string;
    type?: {
      layout?: string;
    };
  }
}

declare global {
  interface ObjectConstructor {
    keys<T>(obj: T): Array<keyof T>;
  }
}

declare module 'react-hook-form' {
  export type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    watch: UseFormWatch<TFieldValues>;
    getValues: UseFormGetValues<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    clearErrors: UseFormClearErrors<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    trigger: UseFormTrigger<TFieldValues>;
    formState: FormState<TFieldValues>;
    resetField: UseFormResetField<TFieldValues>;
    reset: UseFormReset<TFieldValues>;
    handleSubmit: (data?: any) => void;
    unregister: UseFormUnregister<TFieldValues>;
    control: Control<TFieldValues, TContext>;
    register: UseFormRegister<TFieldValues>;
    setFocus: UseFormSetFocus<TFieldValues>;
  };
}
