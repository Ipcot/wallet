import styled from '@emotion/styled';
import  themeMaterial  from '../../theme/themeMaterial';
import { ReactComponent as LogoutPic } from '../../img/header/LogoutButton.svg';
import { ReactComponent as CloseSymbol } from '../../img/header/close.svg';



export const contentStyles = {
  [themeMaterial.breakpoints.down('md')]: {
    width: 380,
    fontFamily: 'CirceBold, sans-serif',
  },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  fontFamily: 'CirceBold, sans-serif',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: themeMaterial.space[2],
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

export const modalImg = {
  [themeMaterial.breakpoints.down('md')]: {
    width: 250,
    height: 'auto',
    margin: '0 auto',
  },
    width: 320,
    height: 'auto',
    margin: '0 auto',
}; 

export const modalHeding = {
  [themeMaterial.breakpoints.down('md')]: {
    fontSize: '24px',
    fontFamily: themeMaterial.fonts.h1,
    textAlign: 'center',
    marginBottom: themeMaterial.space[1],
  },
    fontSize: themeMaterial.fontSizes.xl,
    fontFamily: themeMaterial.fonts.h1,
    textAlign: 'center',
    marginBottom: themeMaterial.space[2],
}


export const CloseBtnSymbol = styled(CloseSymbol)`
  width: 18px;
  height: 18px;
  margin-left: auto;
`;

export const CloseBtn = {
  width: '100%',
  paddingBottom: '15px',
  paddingTop: 0,
}

export const LogoutButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
`;

export const ConfirmButton = {
  [themeMaterial.breakpoints.down('md')]: {
    width: 280,
    marginBottom: '10px',
    marginTop: '10px',
  },
    width: 300,
    marginBottom: '10px',
    marginTop: '10px',
};

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
