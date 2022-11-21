import styled from '@emotion/styled';

export const LoginImage = styled.img`
  width: 260.26px;
  height: 250px;
  margin-right: 40px;
  margin-bottom: 28px;
  @media screen and (min-width: 1200px) {
    width: 435.2px;
    height: 419.5px;
    margin-bottom: 40px;
    margin-right: 40px;
  }
`;

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 533px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 1200px) {
    flex-direction: column;
    background-color: ${props => props.theme.palette.primary.loginMain};
  }
`;
export const BoxForm = styled.div``;

export const BoxStyled = styled.div`
  padding: 60px 117px 196px 118px;
  background-color: ${props => props.theme.palette.primary.loginMain};
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
