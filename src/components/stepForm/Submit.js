import React from 'react';
import Container from '@material-ui/core/Container';

export const Submit = ({ formData }) => {
  console.log(formData);
  return (
    <Container>
      <h1>Спасибо Вам за регистрацию! :)</h1>
    </Container>
  )
}