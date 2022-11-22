import styled from 'styled-components';

export const Container = styled.div`
  min-width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  /* background: red; */

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: ${p => p.theme.breakpoints[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    /* justify-content: flex-start; */
    padding: 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    /* justify-content: flex-start; */
    padding: 45px 15px;
  }
`;

export const Sider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  /* justify-content: start; */
  /* background: green; */
`;
