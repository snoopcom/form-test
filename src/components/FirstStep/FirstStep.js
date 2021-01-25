import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';

import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  login: '',
  password: '',
  phone: '',
};

export const FirstStep = ({ formData, setForm, navigation }) => {
  const  { login, password, phone } = formData;
   
  const [ isActive, setActive ] = useState(true);

  const onChangeHandle = async () => {
    const isValid = await validationSchema.isValid(formData)
    setActive(isValid)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form onChange={onChangeHandle} className="form">
      <h1 className="header">Регистрация</h1>
        <div>
          <label className="inputName" htmlFor="login">Логин</label>
          <Form.Item name="login" >
            <Input
              className="input"
              value={login}
              id="login"
              name="login"
              onChange={setForm}
              placeholder="Алексей"
              size="large"
            />
          </Form.Item>
        </div>
        <div>
          <label className="inputName" htmlFor="password">Пароль</label>
          <Form.Item name="password" >
            <Input.Password
              className="input"
              value={password}
              id="password"
              name="password"
              onChange={setForm}
              placeholder="password"
              size="large"
            />
          </Form.Item>
        </div>
        <div>
          <label className="inputName" htmlFor="phone">Номер телефона</label>
          <Form.Item name="phone" >
            <Input 
              className="input"
              value={phone}
              id="phone"
              name="phone"
              onChange={setForm}
              size="large"
            />
            <span className="inputDescription">на случай, если вы забудете свой пароль</span>
          </Form.Item>
        </div>
        <div className="formButtonsContainer">
          <SubmitButton 
            className="button"
            size="large" 
            disabled={!isActive}
            onClick={() => navigation.next()}
          >
            Продложить
          </SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};
 