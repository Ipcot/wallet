import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  /* background: red; */

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => p.theme.breakpoints[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
`;

export const Sider = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 50%; 
  justify-content: start;
  /* background: green; */
`;