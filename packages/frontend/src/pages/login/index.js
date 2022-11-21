import LoginForm from 'components/LoginForm';
import LoginImg from 'assets/icons/login.png';
import {
  BoxForm,
  BoxStyled,
  ContainerStyled,
  LoginImage,
} from './index.styled';
/* import { Container } from 'components/ui/Container'; */
import Container from 'components/layout/common/Container/Container';
const Register = () => {
  return (
    <Container>
      <BoxStyled>
        <ContainerStyled>
          <LoginImage alt="logo" src={`${LoginImg}`} />
          <h1>Finance App</h1>
        </ContainerStyled>
        <BoxForm>
          <LoginForm />
        </BoxForm>
      </BoxStyled>
    </Container>
  );
};
export default Register;
