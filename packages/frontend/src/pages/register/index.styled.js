import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 768px;
    padding: 60px 117px 196px 118px;
    background-color: ${p => p.theme.palette.primary.bg};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 1280px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const LoginTitle = styled.h1`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.xl};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    margin-left: 45.5px;
  }
`;

export const LoginImage = styled.img`
  width: 274px;
  height: 250px;
  margin-bottom: 50px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 452px;
    height: 412px;
  }
`;

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 533px;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.palette.primary.bg};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    height: 100vh;
    flex-direction: column;
    background-color: ${p => p.theme.palette.primary.bg};
    padding: 153px 31px 77.5px 66px;
  }
`;

export const BoxForm = styled.div`
  height: 100vh;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    height: 100vh;
    padding: 52px 91px 52px 107px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const BoxStyled = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    display: flex;
    align-items: center;
  }
`;
