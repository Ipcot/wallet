import styled from '@emotion/styled';
import { Select } from '@mui/material';
import themeMaterial from 'theme/themeMaterial';

export const StatisticsSelectStyle = styled(Select)({
  color: '#000000',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  '& .MuiSelect-icon': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: '1px',
    '&:focus': {
      borderColor: '#000000',
    },
    '& .Mui-focused': {
      borderColor: 'red',
    },
  },
});
