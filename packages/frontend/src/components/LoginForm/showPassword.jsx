/* import * as React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputUnstyled from '@mui/base/InputUnstyled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  IconButton,
  InputAdornment,
  StyledInputRoot,
  StyledInputElement,
} from './showPassword.styled';

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

CustomInput.propTypes = { */
/**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   @default {} */

/* slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

export default function InputAdornments() {
  const { register } = useForm();
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
        placeholder="Password"
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
 */
