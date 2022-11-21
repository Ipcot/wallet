import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import LogoImg from 'assets/icons/logo.svg';
/* import LogoImg from '../../../public/favicon.ico'; */
import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoImage,
  LogoTitle,
  BoxLogo,
} from './LoginForm.styled';

const LoginForm = () => {
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
        <LockImage alt="envelope" src={`${LockImg}`} />
        <Input placeholder="Password" />
      </InputContainer>

      <Button
        sx={{
          marginBottom: 2,
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
export default LoginForm;
{
  /* <Button
        sx={{
          width: 300,
          color: "green",
          backgroundColor: "white",
        }}
      >
        Login
      </Button> */
}
