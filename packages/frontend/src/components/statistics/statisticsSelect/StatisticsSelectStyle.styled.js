import styled from '@emotion/styled';
import { Select, FormControl, MenuItem } from '@mui/material';
import themeMaterial from '../../../theme/themeMaterial';

export const SelectStyle = styled(Select)({
  width: '100%',
  // padding: '12px 40px 12px 20px',
  // paddingLeft: '20px',
  // paddingRight: '0',
  // height: '50px',
  borderRadius: '30px',
  border: '1.5px solid #000000',
  outline: 'none',
  backgroundColor: 'transparent',
  fontFamily: `${themeMaterial.fonts.body}`,
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#000000',
  '& .MuiSelect-select': {
    // height: '50px',
    // padding: '20px',
    paddingLeft: '20px',
    paddingRight: '0',
  },
  '& .MuiSelect-icon': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiSelect:before': {
    position: 'relative',
  },
});
/* width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`; */

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

export const SelectIconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 0;
    background-color: #000000;
    border: 0.5px solid #000000;
    position: absolute;
    right: 28px;
    bottom: 28px;
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
    bottom: 28px;
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
