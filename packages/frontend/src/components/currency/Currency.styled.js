import styled from '@emotion/styled';

export const CurrencyWrapper = styled.div`
  height: 182px;
  width: 336px;
  display: none;
  border-radius: 30px;
  background-color: #4a56e2;
  position: relative;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: block;
    margin-top: 32px;
    height: 182px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    display: block;
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
  color: #ffffff;
`;

export const CurrencyTable = styled.table`
  /* padding: 0 44px 0 44px; */
  /* width: 393px;
  height: 347px; */
  /* width: 336px; */
  border-radius: 30px;
  background-color: #4a56e2;
  border-spacing: 0;
`;

export const CurrencyTableTr = styled.tr`
  /* height: 60px; */
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
  /* border-radius: 50% 20% / 10% 40%; */
  transform: rotate(180deg);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  );
`;
