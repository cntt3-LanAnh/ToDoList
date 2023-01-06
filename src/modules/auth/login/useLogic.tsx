import { LoginReqDto } from 'dto/requests';
import { useFormHandler } from 'hooks/useFormHandler';
import useTranslation from 'next-translate/useTranslation';
import { UseFormReturn } from 'react-hook-form';

import { getResolver } from './validate';

export type FormHandler = UseFormReturn<LoginReqDto>;

export const useLogic = () => {
  const { t } = useTranslation('login');

  const formHandler = useFormHandler<LoginReqDto>({
    initialState: { defaultValues: new LoginReqDto() },
    resolver: getResolver(t),
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
