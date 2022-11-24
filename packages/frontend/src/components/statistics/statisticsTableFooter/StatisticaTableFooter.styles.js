import styled from '@emotion/styled';

export const StatisticaTableFooterStyle = styled.div`
  width: 280px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const TableFooterTitle = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.12;
  color: #000000;
`;

export const TableFooterExpenses = styled.span`
  color: #ff6596;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`;
export const TableFooterIncome = styled.span`
  color: #24cca7;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`;
