import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  color: ${props => props.theme.palette.primary.inputBorder};
  padding: 8px 8px 8px 54px;
  outline: none;
  border: none;
  margin-right: 22px;
  border-bottom: 1px solid ${props => props.theme.palette.primary.inputBorder};
  /* color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]}; */
 /*  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'}; */
 /*  border: 1px solid ${
   theme.palette.mode === 'dark' ? grey[700] : grey[200]
 }; */

  /* display: flex;
  align-items: center;
  justify-content: center; */


  &.${inputUnstyledClasses.focused} {

     border-bottom: 1px solid ${props =>
       props.theme.palette.primary.inputBorder};
     border-bottom: 1px solid ${props =>
       props.theme.palette.primary.inputBorder};
   /*  outline: 3px solid ${
     theme.palette.mode === 'dark' ? blue[500] : grey[300]
   }; */
   outline: 1px solid ${props => props.theme.palette.primary.inputBorder};
   
  }

  &:hover {
    border-bottom: 1px solid ${props =>
      props.theme.palette.primary.inputBorder};
  }
`
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
 /*  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]}; */
  padding: 8px 8px 8px 54px;
  outline: none;
  border: none;
  margin-right: 22px;
  /* border-bottom: 1px solid ${props =>
    props.theme.palette.primary.inputBorder}; */
`
);

const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
  `
);

const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

CustomInput.propTypes = {
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', '& > * + *': { ml: 1 } }}>
      <CustomInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
