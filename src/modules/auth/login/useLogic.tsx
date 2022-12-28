import { LoginReqDto } from 'dto/requests';
import { useFormHandler } from 'hooks';
import { UseFormReturn } from 'react-hook-form';

export type FormHandler = UseFormReturn<LoginReqDto>;

export const useLogic = () => {
  const formHandler = useFormHandler<LoginReqDto>({
    initialState: { defaultValues: new LoginReqDto() },

    onSubmit: handleSubmit,
  });

  function handleSubmit(data: LoginReqDto) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: useLogic.tsx:16 ~ handleSubmit ~ data', data);
  }

  return {
    formHandler,
  };
};
