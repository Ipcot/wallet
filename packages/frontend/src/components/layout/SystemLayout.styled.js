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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 45px 15px;
  }
`;

export const Sider = styled.div`
  margin-right: 70px;
  background-color: red;
  /* width: 100%;
  display: flex;
  flex-direction: column; */
  /* width: 50%; */
  /* justify-content: start; */
  /* background: green; */
`;
