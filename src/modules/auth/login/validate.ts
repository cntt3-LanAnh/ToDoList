import { LoginReqDto } from 'dto/requests';
import { Translate } from 'next-translate';
import * as yup from 'yup';

export function getResolver(t: Translate) {
  return yup.object<Partial<Record<keyof LoginReqDto, yup.AnySchema>>>({
    email: yup
      .string()
      .trim()
      .matches(/[^\s*].*[^\s*]/g, t('common:validation.is_required', { field_name: t('email') }))
      .email(t('common:validation.is_email'))
      .max(50, t('common:validation.max_length', { field_name: t('email'), max_length: '50' }))
      .matches(/^[^ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　]+$/, t('common:validation.is_email'))
      .required(t('common:validation.is_required', { field_name: t('email') })),
    password: yup
      .string()
      .trim()
      .matches(/[^\s*].*[^\s*]/g, t('common:validation.is_required', { field_name: t('password') }))
      .min(8, t('common:validation.is_password'))
      .max(18, t('common:validation.is_password'))
      .required(t('common:validation.is_required', { field_name: t('password') }))
      .matches(/^[^ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　]+$/, t('common:validation.is_password')),
  });
}
