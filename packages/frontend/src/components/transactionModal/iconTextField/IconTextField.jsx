import {
  TextField,
  InputAdornment,
} from '@mui/material';

import styled from '@emotion/styled';

export const IconField = styled(TextField)(props => ({
    '& .MuiInput-root': {
        paddingLeft: '20px'
    }
}));

export const IconTextField = ({ iconStart, iconEnd, ...props }) => {
  return (
    <IconField
      {...props}
      InputProps={{
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};