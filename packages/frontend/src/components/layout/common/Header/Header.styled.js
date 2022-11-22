import styled from '@emotion/styled';
import { ReactComponent as WalletIco } from '../../../../img/header/WalletIco.svg';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${p => p.theme.palette.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: ${p => p.theme.breakpoints[1]};
    padding: 20px 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
    margin-right: auto;
    margin-left: auto;
    padding: 20px 16px;
  }
`;

export const AppTitle = styled.p`
  font-family: ${p => p.theme.fonts.logo};
  font-size: 20px;
  line-height: 0.85;
  letter-spacing: 1.2px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.heading};
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.palette.colors.headerSecondary};
  margin-right: ${p => p.theme.space[3]}px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 12px;
  }
`;

export const Separator = styled.div`
  border: 1px solid ${p => p.theme.palette.colors.headerSecondary};
  height: 30px;
  margin-right: 12px;
`;

export const UserControlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AppLogo = styled(WalletIco)`
  width: 30px;
  height: 30px;
  margin-right: ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;
