import { Button } from '@mui/material';
import zxcvbn from 'zxcvbn';
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

const RegisterForm = () => {
  const result = zxcvbn('as').score;
  console.log('password result: ', result);
  const changeColor = () => {
    switch (result) {
      case 0:
        return 'red';
        break;
      case 1:
        return 'yellow';
        break;
      case 2:
        return 'lightgreen';
        break;
      case 3 || 4:
        return 'teal';
        break;
      default:
        return null;
        break;
    }
  };

  const changeProgressBarSettings = () => ({
    width: `${(result + 1) * 25}%`,
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
        <Input placeholder="Password" />
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
