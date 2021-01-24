/* eslint-disable default-case */
import React from 'react';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { validationSchema } from './ValidationSchema';
import './SubmitForm.scss';

const initialValues = {
  login: '',
  password: '',
  phone: '',
};

export const FirstStep = ({ formData, setForm, navigation }) => {
  const  { login, password, phone } = formData;

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <form className='from'>
        <h1>Регистрация</h1>
            <label htmlFor="login">Login</label>
            <Form.Item name="login">
              <Input 
                label='Логин'
                name='login'
                value={login}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                type='text'
              />
            </Form.Item>
            <Input 
              label='Пароль'
              name='password'
              value={password}
              onChange={setForm}
              margin='normal'
              variant='outlined'
              autoComplete='off'
              type='password'
            />
            <br />
            <Input 
              label='Номер телефона'
              name='phone'
              value={phone}
              onChange={setForm}
              margin='normal'
              variant='outlined'
              autoComplete='off'
              type='phone'
            />
            <br />
            <Button  
              variant="contained" 
              style={{ 
              marginTop: '25px',
              background: '#855AFF',
              color: 'white'
              }}
              onClick={() => navigation.next()}
              type={'submit'}
            >Продолжить</Button>
        </form>
      </Formik>
    </div>
      
  )
}
