import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: yup.string()
    .required('Пожалуйста, введите имя'),
  lastName: yup.string()
    .required('Пожалуйста, введите фамилию'),
  mail: yup.string().email('Неккоретный email').required('Пожалуйста, введите почту'),
});