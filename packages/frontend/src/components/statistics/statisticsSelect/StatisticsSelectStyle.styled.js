import styled from '@emotion/styled';

export const StatisticsSelectStyle = styled.select`
  width: 100%;
  padding: 12px 40px 12px 20px;
  appearance: none;
  border-radius: 30px;
  border: 1.5px solid #000000;
  outline: none;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.body};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: flex;
    gap: 16px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    gap: 32px;
  }
`;

export const StatisticsOptions = styled.option`
  padding: 10px 0 10px 10px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const StatisticsContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 0;
    background-color: #000000;
    border: 0.5px solid #000000;
    position: absolute;
    right: 28px;
    bottom: 23px;
    -webkit-transform: rotate(227deg);
    -moz-transform: rotate(227deg);
    -ms-transform: rotate(227deg);
    transform: rotate(227deg);
    pointer-events: none;
  }
  &::after {
    content: '';
    width: 12px;
    background-color: #000000;
    border: 0.5px solid #000000;
    position: absolute;
    right: 20px;
    bottom: 23px;
    -webkit-transform: rotate(316deg);
    -moz-transform: rotate(316deg);
    -ms-transform: rotate(316deg);
    transform: rotate(316deg);
    pointer-events: none;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 160px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 182px;
  }
`;
