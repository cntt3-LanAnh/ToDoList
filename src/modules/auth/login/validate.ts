import { LoginReqDto } from 'dto/requests';
import { Translate } from 'next-translate';
import * as yup from 'yup';

export function getResolver(t: Translate) {
  return yup.object<Partial<Record<keyof LoginReqDto, yup.AnySchema>>>({
    email: yup
      .string()
      .trim()
      .matches(/[^\s*].*[^\s*]/g, t('common:validation.is_required', { field_name: t('login:form.email') }))
      .email(t('common:validation.invalid', { field_name: t('login:form.email') }))
      .max(50, t('common:validation.max_length', { field_name: t('login:form.email'), max_length: '50' }))
      .matches(/^[^ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　]+$/, t('common:validation.invalid'))
      .required(t('common:validation.is_required', { field_name: t('login:form.email') })),
    password: yup
      .string()
      .trim()
      .matches(/[^\s*].*[^\s*]/g, t('common:validation.is_required', { field_name: t('login:form.password') }))
      .min(8, t('common:validation.invalid', { field_name: t('login:form.password') }))
      .max(18, t('common:validation.invalid', { field_name: t('login:form.password') }))
      .required(t('common:validation.is_required', { field_name: t('login:form.password') }))
      .matches(/^[^ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　]+$/, t('common:validation.invalid')),
  });
}
