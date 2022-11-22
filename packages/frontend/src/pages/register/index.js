import RegisterForm from 'components/RegisterForm';
import LoginImg from 'assets/icons/register.png';
import {
  BoxForm,
  BoxStyled,
  ContainerStyled,
  LoginImage,
  LoginTitle,
} from './index.styled';
/* import { Container } from 'components/ui/Container'; */
import Container from 'components/layout/common/Container/Container';
import { useRegisterMutation } from 'store/auth/authApi';
// import { useGetAllCategoriesQuery } from 'store/transactions/transactionsApi';

const Register = () => {
  // const { data, isLoading, isError } = useGetAllCategoriesQuery();
  const user = {
    email: 'anastasiia@mail.com',
    password: 'password',
    name: 'Anastasiia',
  };
  const [updatePost, result] = useRegisterMutation();
  // updatePost(user);
  // console.log('result: ', result);

  // register(user);
  return (
    <Container>
      <BoxStyled>
        <ContainerStyled>
          <LoginImage alt="logo" src={`${LoginImg}`} />
          <LoginTitle>Finance App</LoginTitle>
        </ContainerStyled>
        <BoxForm>
          <RegisterForm />
        </BoxForm>
      </BoxStyled>
    </Container>
  );
};
export default Register;
