import styled from '@emotion/styled';
import themeMaterial from 'theme/themeMaterial';

export const CardConteiner = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: ${themeMaterial.palette.colors.white};
  margin-bottom: ${themeMaterial.space[3]}px;
  border-radius: ${themeMaterial.radii.normal};
  border-left: 5px solid
    ${p => {
      switch (p.typeTr) {
        case '-':
          return `${themeMaterial.palette.colors.alternate}`;
        case '+':
          return `${themeMaterial.palette.colors.accent}`;
        default:
          return ``;
      }
    }};
`;

export const CardBox = styled.div`
  padding: 12px 20px 8px;
`;

export const TypographyCard = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: ${themeMaterial.fonts.h2};
  font-size: ${themeMaterial.fontSizes.m};
  font-weight: ${themeMaterial.fontWeights.bold};
  margin-bottom: 20px;
  &::after {
    position: absolute;
    content: '';
    bottom: -8px;
    left: -25px;
    width: 100%;
    min-width: 280px;
    border-bottom: ${themeMaterial.borders.bottomTable};
  }
  &:last-child {
    margin-bottom: 0;
    &::after {
      border-bottom: none;
    }
  }
`;

export const Span = styled.span`
  font-weight: ${p => (p.typeTr ? 700 : 400)};
  font-size: ${themeMaterial.fontSizes.s};
  color: ${p => {
    switch (p.typeTr) {
      case '-':
        return `${themeMaterial.palette.colors.alternate}`;
      case '+':
        return `${themeMaterial.palette.colors.accent}`;
      default:
        return ``;
    }
  }};
`;

export const ConteinerTable = styled.div`
  max-width: 704px;
  width: 100%;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    max-width: 715px;
    margin-left: auto;
    padding-top: 45px;
  }
`;

export const TableContent = styled.table`
  display: flex;
  flex-direction: column;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    min-width: 715px;
  }
`;

export const THead = styled.th`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-family: ${themeMaterial.fonts.h2};
  font-size: ${themeMaterial.fontSizes.m};
  font-weight: ${themeMaterial.fontWeights.bold};
  line-height: 1.5;
  padding: 16px 20px 15px;
`;

export const Row = styled.tr`
  display: flex;
  width: 100%;
`;

export const TableRowBody = styled.tr`
  display: flex;
  justify-content: space-around;
  border-bottom: ${themeMaterial.borders.bottomTable};
  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.th`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: ${themeMaterial.fonts.h2};
  font-weight: ${p => (p.typeTr ? 700 : 400)};
  padding: 16px 15px;
  font-size: ${themeMaterial.fontSizes.s};
  line-height: 1.5;

  color: ${p => {
    switch (p.typeTr) {
      case '-':
        return `${themeMaterial.palette.colors.alternate}`;
      case '+':
        return `${themeMaterial.palette.colors.accent}`;
      default:
        return ``;
    }
  }};
`;

export const BoxButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  @media (min-width: 767px) {
    bottom: 40px;
    right: 40px;
  }
`;
