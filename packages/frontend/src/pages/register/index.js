import Media from 'react-media';
import RegisterForm from 'components/RegisterForm';
import LoginImg from 'assets/icons/register.png';

import {
  BoxForm,
  BoxStyled,
  ContainerStyled,
  LoginImage,
  LoginTitle,
  Container,
} from './index.styled';

const Register = () => {
  return (
    <div>
      <Container>
        <BoxStyled>
          <Media
            query="(min-width: 767px)"
            render={() => (
              <ContainerStyled>
                <LoginImage alt="logo" src={`${LoginImg}`} />

                <LoginTitle>Finance App</LoginTitle>
              </ContainerStyled>
            )}
          />

          <BoxForm>
            <RegisterForm />
          </BoxForm>
        </BoxStyled>
      </Container>
    </div>
  );
};
export default Register;
