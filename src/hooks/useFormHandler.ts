import { useEffect } from 'react';
import { FieldPath, FieldValues, Path, RegisterOptions, UnPackAsyncDefaultValues, useForm, UseFormHandleSubmit, UseFormProps } from 'react-hook-form';
import { useGlobalStoreContext } from 'stores';

type InitialStateCustom = {
  preventTrim: boolean;
  isControlled: boolean;
};

interface IUseFormHandlerProps<TFieldValues extends FieldValues> {
  initialState: UseFormProps<TFieldValues>;
  onSubmit?: (data: TFieldValues) => void;
}

export function useFormHandler<TFieldValues extends FieldValues>({ initialState, onSubmit }: IUseFormHandlerProps<TFieldValues>) {
  const { register: registerCustom, handleSubmit: submitForm, ...useFormProps } = useForm<TFieldValues>(initialState);
  const { appStore } = useGlobalStoreContext();

  useEffect(() => {
    if (!useFormProps.control) {
      return;
    }

    appStore.setData({ formControlInstance: useFormProps.control });
  }, [useFormProps.control]);

  const handleOnblur =
    ({ name, preventTrim, onBlur }: { name: Path<UnPackAsyncDefaultValues<TFieldValues>>; preventTrim?: boolean; onBlur: any }) =>
    async (e: any) => {
      let value = e;
      if (e.target) {
        value = e.target.value;
      }

      if (typeof value === 'string' && value && !preventTrim) {
        value = value.trim();
        e.target.value = value;

        useFormProps.setValue(name, value);
      }

      onBlur(e);
    };

  const register = <TFieldName extends FieldPath<TFieldValues>>(
    name: TFieldName,
    options?: RegisterOptions<TFieldValues, TFieldName> & InitialStateCustom
  ) => {
    const { ref: refCustom, onBlur, ...props } = registerCustom(name, options);

    const ref = (instance: any) => {
      if (instance?.input) {
        refCustom(instance.input);

        return;
      }

      refCustom(instance);
    };

    let registerProps: any = { ...props, ref, onBlur: handleOnblur({ name, preventTrim: options?.preventTrim, onBlur }) };

    if (options?.isControlled) {
      const value = useFormProps.watch(name);
      registerProps = { ...registerProps, value };
    }

    return registerProps;
  };

  const handleSubmit = () => {
    if (!onSubmit) {
      return;
    }

    submitForm(onSubmit)();
  };

  return { ...useFormProps, register, handleSubmit };
}
