import styled from '@emotion/styled';

export const StatisticsMassage = styled.div`
  margin-top: 20px;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  border-radius: 50%;
  border: 20px solid #ffd8d0;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const StatisticsMassageTitle = styled.h3`
  font-family: ${props => props.theme.fonts.h1};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 0.6;
`;
