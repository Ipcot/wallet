import styled from '@emotion/styled';

export const InputContainer = styled.div`
  height: 72px;
  position: relative;
  @media screen and (min-width: 768px) {
  }
`;

export const Input = styled.input`
  color: ${props => props.theme.palette.primary.inputBorder};
  padding: 8px 8px 8px 54px;
  outline: none;
  border: none;
  margin-right: 22px;
  border-bottom: 1px solid ${props => props.theme.palette.primary.inputBorder};
  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  &:focus {
    border-bottom-color: teal;
  }
  &::placeholder {
    font-family: 'Circe', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    width: 533px;
    background-color: ${props => props.theme.palette.primary.contrastText};
    padding: 40px 58.5px 62px 65px;
    border-radius: 20px;
  }
  /*  @media (${props => props.theme.breakpoints.values.lg}) {
    width: 533px;
    background-color: ${props => props.theme.palette.primary.contrastText};
    padding: 40px 58.5px 62px 65px;
  } */
`;

export const EnvelopeImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`;
export const LockImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`;
/* export const PersonImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`; */
export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const LogoImage = styled.img`
  width: 38px;
  height: 30px;
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
/* export const Post = styled.p`
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
`; */

export const Button = styled.button``;

/* export const InputContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const Input = styled.input`
  color: ${props => props.theme.palette.primary.inputBorder};
  padding: 8px 8px 8px 54px;
  outline: none;
  border: none;
  margin-right: 22px;
  border-bottom: 1px solid ${props => props.theme.palette.primary.inputBorder};
  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  &:focus {
    color: teal;
    border-bottom-color: teal;
  }
  @media screen and (min-width: 768px) {
    width: 409.5px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
  padding: 32px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.contrastText};

  @media screen and (min-width: 768px) {
    width: 533px;
    background-color: ${props => props.theme.palette.primary.contrastText};
    padding: 40px 58.5px 62px 65px;
    border-radius: 20px;
  }
`;

export const EnvelopeImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7%;
`;
export const LockImage = styled.img`
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
export const LogoImage = styled.img`
  width: 38px;
  height: 30px;
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

export const Button = styled.button``; */
