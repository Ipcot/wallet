import styled from '@emotion/styled';

import { ReactComponent as LockPic } from 'assets/icons/lock.svg';
import { ReactComponent as EnvelopePic } from 'assets/icons/envelope.svg';
import { NavLink } from 'react-router-dom';

export const InputContainer = styled.div`
  /* height: 72px; */
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  color: ${props => props.theme.palette.primary.inputBorder};
  padding: 8px 8px 8px 54px;
  outline: none;
  border: none;
  /* margin-right: 22px; */
  border-bottom: 1px solid ${props => props.theme.palette.primary.inputBorder};
  width: 100%;
  display: block;
  margin-bottom: 25px;

  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};

  /*  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5; */
  color: ${p => p.theme.palette.colors.text};
  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    border-bottom-color: #4a56e2;

    &::placeholder {
      color: transparent;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 409.5px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
  padding: 110px 20px 107px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.contrastText};

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 533px;
    background-color: ${props => props.theme.palette.primary.contrastText};
    padding: 40px 58.5px 62px 65px;
    border-radius: 20px;
    /* border-radius: ${p => p.theme.shape.borderRadius}; */
  }
`;

export const EnvelopeImage = styled(EnvelopePic)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`;
export const LockImage = styled(LockPic)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogoTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-right: 20px;
`;
export const Post = styled.p`
  color: #bf1650;
  padding-top: 5px;
  padding-left: 30px;
  position: absolute;
  left: 20px;
  top: 45px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 0.87;
  &::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const ProgressContainer = styled.div`
  height: 5px;
  width: 100%;
  margin-top: -25px;
  margin-bottom: 40px;
  color: lightgreen;
`;

export const ProgressBar = styled.div`
  height: 5px;
  border-radius: 50px;
`;

export const Link = styled(NavLink)`
  padding: 10px 100px;
  color: #4a56e2;

  :hover {
    cursor: pointer;
  }
`;

export const IconEye = styled.div`
  display: inline;
  position: absolute;
  top: 10px;
  right: 10px;

  color: #bdbdbd;
`;

export const Button = styled.button``;
