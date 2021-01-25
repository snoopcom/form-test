/* eslint-disable default-case */
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { validationSchema } from './ValidationSchema';

const initialValues = {
  firstName: '',
  lastName: '',
  mail: '',
};

export const SecondStep = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, mail } = formData 

  const [ isActive, setActive ] = useState(true);

  const onChangeHandleTest = async () => {
    const isValid = await validationSchema.isValid(formData)
    setActive(!isValid)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form onChange={onChangeHandleTest} className="form">
      <h1 className="header">Регистрация</h1>
        <div>
          <label className="inputName" htmlFor="firstName">Имя</label>
          <Form.Item name="firstName">
            <Input
              value={firstName}
              id="firstName"
              name="firstName"
              onChange={setForm}
              size="large"
            />
          </Form.Item>
        </div>
        <div>
          <label className="inputName" htmlFor="lastName">Фамилия</label>
          <Form.Item name="lastName">
            <Input
              value={lastName}
              id="lastName"
              name="lastName"
              onChange={setForm}
              size="large"
            />
          </Form.Item>
        </div>
        <div>
          <label className="inputName" htmlFor="mail">E-mail</label>
          <Form.Item name="mail">
            <Input
              value={mail}
              id="mail"
              name="mail"
              onChange={setForm}
              size="large"
            />
            <span className="inputDescription">на случай, если вы забудете свой пароль</span>
          </Form.Item>
        </div>
        <div >
          <SubmitButton className="formButtonsContainer"
            className="button"
            size="large" 
            disabled={isActive}
            onClick={() => navigation.next()}
          >
            Зарегистрировать
          </SubmitButton>
        </div>
        <button 
            className="buttonBack"
            onClick={() => navigation.previous()}
        >
         {'< Назад'}
        </button>
      </Form>
    </Formik>
  )
}