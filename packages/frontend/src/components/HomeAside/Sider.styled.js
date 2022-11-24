import styled from '@emotion/styled';

export const AsideWrapper = styled.div`
  width: ${p => p.theme.breakpoints.values.sm};
  padding: 15px 20px 32px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    /* width: 50%; */

    margin-right: ${p => p.theme.space[5]}px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-right: 70px;
    /* width: 50%; */
  }
`;
