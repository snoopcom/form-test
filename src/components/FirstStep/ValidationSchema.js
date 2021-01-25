import * as yup from 'yup';

const validationSchema = yup.object().shape({
  login: yup.string()
    .max(50, 'Имя должно содержать не более 50 символов')
    .required('Пожалуйста, введите имя'),
  password: yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
      'Введите не меньше 8 символов, как минимум одна цифра и одна заглавная буква',
    )
    .required('Пожалуйста, введите пароль'),
  phone: yup.string()
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      'Введите пожалуйста номер телефона'
    )
    .required('Введите пожалуйста номер телефона'),
});

export default validationSchema;
