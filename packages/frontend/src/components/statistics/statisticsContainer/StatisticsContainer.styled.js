import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-left: 69px;
  }
`;
