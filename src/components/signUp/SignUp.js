/* eslint-disable default-case */
import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import { FirstStep }  from '../stepForm/FirstStep';
import { SecondStep }  from '../stepForm/SecondStep';
import { Submit }  from '../stepForm/Submit';

const defaultData = {
  login: "",
  password: "",
  phone: "",
  firstName: "",
  lastName: "",
  mail: "",
}

const steps = [
  { id: 'firstStep' },
  { id: 'secondStep' },
  { id: 'submit' },
];

const SignUp = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })
 
  const props = { formData, setForm, navigation }

  switch (step.id) {
    case 'firstStep':
      return <FirstStep {...props} />;
    case 'secondStep':
      return <SecondStep {...props} />;
    case 'submit':
      return <Submit {...props} />;
  }  
}

export default SignUp;