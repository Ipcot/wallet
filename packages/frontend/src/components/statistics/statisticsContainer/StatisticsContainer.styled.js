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
    /* width: 50%; */
  }
`;

// border: 1px solid #E7E5F2;
// box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
