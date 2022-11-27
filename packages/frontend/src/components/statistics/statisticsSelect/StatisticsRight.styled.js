import styled from '@emotion/styled';

export const StatisticsRight = styled.div`
  width: 280px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 336px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 395px;
  }
`;
