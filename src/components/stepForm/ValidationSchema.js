import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  login: yup.string().typeError('RRR').required('поле не может быть пустым'),
  password: yup.string().min(4).max(10).required('поле не может быть пустым'),
  phone: yup.number().required('Введите номер телефона')
})