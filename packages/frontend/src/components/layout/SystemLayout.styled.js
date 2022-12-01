import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: ${p => p.theme.breakpoints.values.sm};
  margin: 0 auto;

  @media (min-width: ${p => p.theme.breakpoints.values.md}) {
    min-width: ${p => p.theme.breakpoints.values.md};
  }

  @media (min-width: ${p => p.theme.breakpoints.values.lg}) {
    width: ${p => p.theme.breakpoints.values.lg};
  }
`;

export const MainContainer = styled(Container)`
  width: 320px;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    min-width: 768px;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 32px 0 32px;
    background-image: url('../img/blured-blue.png'),
      url('../img/blured-orange.png');
    background-repeat: no-repeat;
    background-position: bottom -150px left -150px, top -230px right -350px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    height: 100vh;
    min-width: 1280px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 16px 50px 16px;
    background-image: url('../img/blured-blue.png'),
      url('../img/blured-orange.png');
    background-repeat: no-repeat;
    background-position: bottom -250px left -150px, top -200px right -150px;
  }
`;

export const Sider = styled.div``;
