import { Button } from '@mui/material';
import { passwordStrength } from 'check-password-strength';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import LogoImg from 'assets/icons/logo.svg';
import PersonImg from 'assets/icons/person.svg';

import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoImage,
  LogoTitle,
  BoxLogo,
  PersonImage,
  ProgressBar,
  ProgressContainer,
} from './RegisterForm.styled';
import { useState } from 'react';

const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const result = passwordStrength(password);
  const handleChange = e => {
    setPassword(e.currentTarget.value);
  };

  const changeColor = () => {
    switch (result.value) {
      case 'Too weak':
        return 'red';
      case 'Weak':
        return 'yellow';
      case 'Medium':
        return 'lightgreen';
      case 'Strong':
        return 'teal';
      default:
        return null;
    }
  };

  const changeProgressBarSettings = () => ({
    width: `${(result.id + 1) * 25}%`,
    background: changeColor(),
  });

  return (
    <Form>
      <BoxLogo>
        <LogoImage alt="logo" src={`${LogoImg}`} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>

      <InputContainer>
        <EnvelopeImage alt="envelope" src={`${EnvelopeImg}`} />
        <Input placeholder="E-mail" />
      </InputContainer>

      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
        <Input placeholder="Password" onChange={handleChange} />
      </InputContainer>

      <ProgressContainer>
        <ProgressBar style={changeProgressBarSettings()} />
      </ProgressContainer>

      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
        <Input placeholder="Confirm password" />
      </InputContainer>

      <InputContainer>
        <PersonImage alt="lock" src={`${PersonImg}`} />
        <Input placeholder="First name" />
      </InputContainer>

      <Button
        sx={{
          marginBottom: 3,
        }}
        variant="contained"
      >
        Log in
      </Button>
      <Button color="secondary" variant="outlined">
        Register
      </Button>
    </Form>
  );
};
export default RegisterForm;
