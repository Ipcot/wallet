import styled from 'styled-components';

export const AsideWrapper = styled.div`
  width: ${p => p.theme.breakpoints[0]};
  /* padding: 15px 20px 32px; */
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 50%;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 50%;
  }
`;
