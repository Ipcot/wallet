import styled from 'styled-components';
import { ReactComponent as LogoutPic } from '../../img/header/LogoutButton.svg';
import { ReactComponent as CloseSymbol } from '../../img/header/close.svg';

export const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 540,
    fontFamily: 'Circle, sans-serif',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    padding: '30px 50px',
    borderRadius: 1,
  
};

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: ${p => p.theme.space[1]};
  padding-right: ${p => p.theme.space[1]};
    @media screen and (min-width: 320px) {
    max-width: 320px;
  }
    @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const LogoutImg = styled(LogoutPic)`
  width: 18px;
  height: 18px;
  color: ${p => p.theme.colors.headerSecondary};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.notActive};
  }
`;

export const ClosePic = styled(CloseSymbol)`
  width: 18px;
  height: 18px;
`;

export const LogoutButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
`;

export const UserExit = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.headerSecondary};
  margin-left: ${p => p.theme.space[3]}px;
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.notActive};
  }
`;
