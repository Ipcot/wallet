import styled from '@emotion/styled';

export const StatisticsTableStyle = styled.table`
  height: 400px;
  width: 280px;
  margin-top: 32px;
  border-spacing: 0;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 336px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 395px;
  }
`;

export const StatisticsHead = styled.tr`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #ffff;
  font-family: ${p => p.theme.fonts.h2};
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const StatisticsThLeft = styled.th`
  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 20px;
`;
export const StatisticsThRigth = styled.th`
  padding-top: 16px;
  padding-bottom: 15px;
  padding-right: 20px;
`;

export const StatisticsBody = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 16px 18px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  font-family: ${p => p.theme.fonts.body};
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;
export const StatisticsBodyicon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
`;
export const StatisticsBodyLeft = styled.td`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const StatisticsBodyRigth = styled.td``;
