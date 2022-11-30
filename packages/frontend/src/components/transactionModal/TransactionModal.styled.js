import {
  Switch,
  Box,
  Typography,
  Select,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';

import Datetime from 'react-datetime';
import styled from '@emotion/styled';
import { ReactComponent as DownArrow } from './img/arrDown.svg';
import { ReactComponent as CalendarSVG } from './img/calendar.svg';
import { ReactComponent as CloseSVG } from './img/close.svg';

export const CloseButton = styled(IconButton)`
  display: none;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
  }
`;

export const CloseIcon = styled(CloseSVG)`
  stroke: black;
`;

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  color: theme.palette.success.main,
  width: 88,
  height: 50,
  padding: 0,
  overflow: 'visible',
  opacity: 1,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    zIndex: 10,
    backgroundImage: 'url("./img/plus.svg")',

    '& .MuiSwitch-thumb': {
      width: 44,
      height: 44,
      background: '#24CCA7',
      boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
    },

    '&.Mui-checked': {
      transform: 'translateX(40px)',

      '& .MuiSwitch-thumb': {
        background: theme.palette.info.main,
        boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
      },

      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${theme.images.minus})`,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${theme.images.plus})`,
    },
  },

  '& .MuiSwitch-track': {
    width: 80,
    height: 40,
    background: 'transparent',
    transform: 'translateY(2px)',
    borderRadius: 30,
    border: '1px solid #b3b3b3',
    opacity: 1,
  },

  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    background: 'transparent',
    opacity: 1,
  },
}));

export const Heading = styled(Typography)(p => ({
  marginBottom: '40px',

  fontFamily: 'PoppinsRegular, sans-serif',
  textAlign: 'center',
  fontSize: '24px',
  lineHeight: '1.5',
}));

export const TransactionBox = styled(Box)`
  position: absolute;
  top: 60px;
  width: 100%;

  padding: 20px;
  background-color: #fff;
  box-shadow: 24;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    border-radius: ${p => p.theme.shape.borderRadius}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 540px;
    padding: 40px 73px 60px 73px;
  }

  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
  }
`;

export const IncomeLabel = styled(Typography)(props => ({
  fontFamily: 'CirceBold, sans-serif',
  fonSize: '16px',
  lineHeight: '1.5',
  color: props.checked ? '#E0E0E0' : '#24CCA7',
}));

export const ExpenseLabel = styled(Typography)(props => ({
  fontFamily: 'CirceBold, sans-serif',
  fonSize: '16px',
  lineHeight: '1.5',
  color: props.checked ? '#FF6596' : '#E0E0E0',
}));

export const SumField = styled(TextField)(props => ({
  '& .MuiInput-root': {
    paddingLeft: '20px',
    fontFamily: 'CirceRegular, sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
  },

  '@media (min-width: 768px)': {
    width: '181px',

    '& .MuiInput-root': {
      '& .MuiInputBase-input.MuiInput-input': {
        textAlign: 'center',
      },
    },
  },
}));

export const DateTimePicker = styled(Datetime)`
  width: 100%;
  border: none;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: flex;
    align-items: center;
    width: 181px;
  }
`;

export const CategorySelect = styled(Select)(props => ({
  height: props.checked ? '32px' : '0',
  marginBottom: props.checked ? '0' : '-70px',
  opacity: props.checked ? '1' : '0',
  transition: 'opacity 1s, height 1s',
  fontFamily: 'CirceRegular, sans-serif',
  fontSize: '18px',
  lineHeight: '1.5',

  '& .MuiSelect-select': {
    paddingLeft: '20px',
  },
}));

export const CategoryPlaceholder = styled.div(props => ({
  color: '#aaa',
  fontFamily: 'CirceRegular, sans-serif',
  fontSize: '18px',
  lineHeight: '1.5',
}));

export const CategoryItem = styled(MenuItem)(props => ({
  paddingLeft: '20px',
  fontFamily: 'CirceBold, sans-serif',
  fontSize: '18px',
  lineHeight: '1.5',
}));

export const DownArrowStyled = styled(DownArrow)`
  margin-right: 20px;
  stroke: black;
  fill: transparent;
`;

export const CalendarSVGStyled = styled(CalendarSVG)`
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const Comment = styled(TextField)(p => ({
  borderBottom: '1px solid black',

  '& .MuiInput-root': {
    paddingLeft: '20px',
    fontFamily: 'CirceRegular, sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
  },
  '& .MuiInput-root:before': {
    border: 'none',
  },
}));
