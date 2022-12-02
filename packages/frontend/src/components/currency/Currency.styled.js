import styled from '@emotion/styled';

export const CurrencyWrapper = styled.div`
  height: 182px;
  width: 280px;
  border-radius: 30px;
  border-color: transparent;
  background-color: #4a56e2;
  position: relative;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    margin-top: 32px;
    height: 182px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-top: 32px;
    width: 393px;
    height: 347px;
  }
`;

export const CurrencyErrorMasage = styled.h3`
  text-align: center;
  margin-top: 20%;
  font-family: ${p => p.theme.fonts.body};
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  border-radius: 30px;
  color: #ffffff;
`;

export const CurrencyTable = styled.table`
  background-color: transparent;
  border-radius: 30px;
  border-spacing: 0;
`;

export const CurrencyHead = styled.thead`
  border-radius: 30px;
`;

export const CurrencyTableTr = styled.tr`
  color: #ffffff;
`;
export const CurrencyTableHeadTr = styled.tr`
  background-color: rgba(255, 255, 255, 0.2);
`;

export const CurrencyTableHead = styled.th`
  height: 50px;
  color: #ffffff;
  width: 131px;
  padding: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    height: 60px;
  }
`;
export const CurrencyTableTd = styled.td`
  height: 40px;
  padding: 0;
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const GradientStyle = styled.div`
  width: 393;
  height: 134px;
  transform: rotate(180deg);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  );
`;
