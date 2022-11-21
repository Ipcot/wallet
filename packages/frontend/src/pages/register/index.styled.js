import styled from '@emotion/styled';

export const Container = styled.img`
  width: 768px;
`;

export const LoginTitle = styled.h1`
  margin: 0;
  font-family: 'Poppins';
  font-size: 30px;
  line-height: 45px;
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
  height: 100vh;
  margin: 0 auto;
  padding: 60px 394px 50px 114px;
  width: 533px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    background-color: ${props => props.theme.palette.primary.loginMain};
    padding: 150px 31px 77.5px 76px;
  }
`;

export const BoxForm = styled.div`
  height: 100vh;
  padding: 0px 117px 196px 118px;
  @media screen and (min-width: 1280px) {
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
