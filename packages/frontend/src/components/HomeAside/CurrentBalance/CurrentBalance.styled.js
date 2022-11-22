import styled from '@emotion/styled';

export const BalanceWrapper = styled.div`
  width: 100%;
  padding: 8px 32px 12px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.theme.palette.colors.white};
  border-radius: ${p => p.theme.radii.large};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 8px 55px 12px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 8px 55px 12px;
  }
`;
