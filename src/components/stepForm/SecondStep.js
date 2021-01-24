/* eslint-disable default-case */
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export const SecondStep = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, mail } = formData 

  return (
    <Container maxWidth='xs'>
      <h1>Регистрация</h1>
      <TextField
        label='Имя'
        name='firstName'
        value={firstName}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <TextField
        label='Фамилия'
        name='lastName'
        value={lastName}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <TextField
        label='E-mail'
        name='mail'
        value={mail}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <Button
        variant="contained" 
        fullWidth 
        style={{ 
          marginTop: '25px',
          background: '#855AFF',
          color: 'white'
        }}
        onClick={() => navigation.go('submit')}
      >Зарегистрировать</Button>
      <Button 
        variant="contained" 
        fullWidth 
        style={{ 
          marginTop: '25px',
          background: '#2A2C35',
          color: '855AFF'
        }}
        onClick={() => navigation.previous()}
      >Назад</Button>
    </Container>
  )
}