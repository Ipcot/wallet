import styled from '@emotion/styled';
import { ReactComponent as LogoutPic } from '../../img/header/LogoutButton.svg';

export const contentStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 540,
  fontFamily: 'Circe, sans-serif',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export const LogoutImg = styled(LogoutPic)`
  width: 18px;
  height: 18px;
  color: ${p => p.theme.palette.colors.headerSecondary};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.palette.colors.notActive};
  }
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
  color: ${p => p.theme.palette.colors.headerSecondary};
  margin-left: ${p => p.theme.space[3]}px;
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.palette.colors.notActive};
  }
`;
