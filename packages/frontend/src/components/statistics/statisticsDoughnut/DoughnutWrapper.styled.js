import styled from '@emotion/styled';

export const DoughnutWrapper = styled.div`
  width: 280px;
  height: 280px;
  margin: 0 auto;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 336px;
    height: 336px;
    margin: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 288px;
    height: 288px;
  }
`;
