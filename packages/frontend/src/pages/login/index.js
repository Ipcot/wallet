import LoginForm from 'components/LoginForm';
import LoginImg from 'assets/icons/login.png';
import {
  BoxForm,
  BoxStyled,
  ContainerStyled,
  LoginImage,
  LoginTitle,
} from './index.styled';
/* import { Container } from 'components/ui/Container'; */
import Container from 'components/layout/common/Container/Container';
import { useLoginMutation } from 'store/auth/authApi';

const Register = () => {
  const [login, result] = useLoginMutation();

  return (
    <Container>
      <BoxStyled>
        <ContainerStyled>
          <LoginImage alt="logo" src={`${LoginImg}`} />
          <LoginTitle>Finance App</LoginTitle>
        </ContainerStyled>
        <BoxForm>
          <LoginForm />
        </BoxForm>
      </BoxStyled>
    </Container>
  );
};
export default Register;
