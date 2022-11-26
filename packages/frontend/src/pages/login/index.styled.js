import styled from '@emotion/styled';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 60px 117px 196px 118px;
    background-color: green;
  }
  @media screen and (min-width: 1280px) {
    width: 768px;
    padding: 60px 117px 196px 118px;
    background-color: green;
  }
`;

export const LoginTitle = styled.h1`
  margin: 0;
  font-family: 'Poppins';
  font-size: 30px;
  line-height: 45px;
  @media screen and (min-width: 768px) {
    margin-left: 45.5px;
  }
`;

export const LoginImage = styled.img`
  width: 260.26px;
  height: 250px;
  margin-bottom: 28px;
  @media screen and (min-width: 1280px) {
    width: 435.2px;
    height: 419.5px;
  }
`;

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 533px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 1280px) {
    height: 100vh;
    flex-direction: column;
    background-color: ${props => props.theme.palette.primary.loginMain};
    padding: 150px 31px 77.5px 76px;
  }
`;

export const BoxForm = styled.div`
  height: 100vh;
  /* padding: 60px 117px 196px 118px; */
  @media screen and (min-width: 1280px) {
    height: 100vh;
    padding: 136px 91px 116px 107px;
  }
`;

export const BoxStyled = styled.div`
  /* padding: 60px 117px 196px 118px; */

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;
