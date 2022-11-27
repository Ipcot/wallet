import styled from '@emotion/styled';

export const BalanceWrapper = styled.div`
  width: 280px;
  padding: 8px 32px 12px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.palette.colors.white};
  border-radius: ${p => p.theme.radii.large};
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    padding: 8px 55px 12px;
    width: 336px;
    margin-bottom: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 8px 55px 12px;
    width: 395px;
    margin-bottom: 0;
  }
`;

export const BalanceTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.palette.colors.textSecondary};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const BalanceValue = styled.p`
  font-family: ${p => p.theme.fonts.mainBalanceNumbers};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.palette.colors.text};
  line-height: ${p => p.theme.lineHeights.heading};
`;
