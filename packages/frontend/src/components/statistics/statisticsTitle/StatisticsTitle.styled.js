import styled from '@emotion/styled';

export const StatisticsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.h1};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 0.6;
  margin-bottom: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-left: 84px;
    margin-top: 32px;
  }
`;
