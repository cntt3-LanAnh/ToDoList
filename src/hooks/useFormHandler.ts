// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { FormikConfig, FormikHelpers, FormikValues, useFormik } from 'formik';

// type RegisterOption = {
//   nameOfValueProps?: string;
//   isNumber?: boolean;
//   isShowConfirmChanged?: boolean;
//   preventTrim?: boolean;
// };

// export function useFormHandler<Values extends FormikValues>({
//   onSubmit,
//   initialValues,
//   validationSchema,
//   ...rest
// }: Omit<FormikConfig<Values>, 'initialValues'> & { initialValues: Partial<Values> }) {
//   const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
//     onSubmit(values, formikHelpers);
//     formikHelpers.resetForm({ values });
//   };

//   const form = useFormik<Values>({
//     initialValues: initialValues as any,
//     validationSchema,
//     onSubmit: handleSubmit,
//     validateOnBlur: false,
//     validateOnChange: true,
//     ...rest,
//   });

//   const handleOnChange = (name: string, isNumber?: boolean) => (e: any) => {
//     if (e?.target) {
//       if (e.target.value && isNumber) {
//         form.setFieldValue(name, Number(e.target.value) || 0);

//         return;
//       }

//       return form.handleChange(e);
//     }

//     if (isNumber) {
//       // eslint-disable-next-line no-param-reassign
//       e = Number(e) || e;
//     }

//     form.setFieldValue(name, e);
//   };

//   const handleOnblur = (name: string, preventTrim?: boolean) => (e: any) => {
//     let value = e;
//     if (e.target) {
//       value = e.target.value;
//     }

//     if (typeof value === 'string' && value && !preventTrim) {
//       value = value.trim();
//       form.setFieldValue(name, value, true);
//     }

//     form.handleBlur(e);
//   };

//   const setData = (data: Partial<Values>) => {
//     Object.keys(data).forEach((key) => {
//       const value = (data as any)[key];
//       form.setFieldValue(key as string, value);
//     });
//   };

//   const register = (name: string, option?: RegisterOption) => {
//     return {
//       name,
//       onChange: handleOnChange(name, option?.isNumber),
//       [option?.nameOfValueProps || 'value']: form.values[name],
//       onBlur: handleOnblur(name, option?.preventTrim),
//     };
//   };

//   return { ...form, register, setData, formState: { errors: form.errors, touchedFields: form.touched } };
// }

export const useFormHandler = () => {
  //TODO
};
