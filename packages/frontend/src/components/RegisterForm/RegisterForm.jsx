import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { passwordStrength } from 'check-password-strength';
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';

import {
  ConfirmButton,
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoTitle,
  BoxLogo,
  PersonImage,
  Post,
  ProgressContainer,
  ProgressBar,
} from './RegisterForm.styled';
import { useEffect, useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = data => {
    const credentials = {
      name: data.firstname,
      email: data.email,
      password: data.password,
    };
    dispatch(authOperations.register(credentials));
    reset();
  };

  const [passwordStyles, setPasswordStyles] = useState({});

  const changeColor = value => {
    switch (value) {
      case 'Too weak':
        return 'red';
      case 'Weak':
        return 'yellow';
      case 'Medium':
        return 'lightgreen';
      case 'Strong':
        return 'teal';
      default:
        return null;
    }
  };

  const verifyPassword = e => {
    const result = passwordStrength(e.target.value);
    setPasswordStyles({
      width: `${(result.id + 1) * 25}%`,
      background: changeColor(result.value),
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BoxLogo>
        <LogoImg style={{ width: '38px', height: '30px' }} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>

      <InputContainer>
        <EnvelopeImage />
        <Input
          {...register('email', {
            required: 'The field is required!',
            minLength: {
              value: 10,
              message: 'Minimum 10 characters!',
            },
            maxLength: {
              value: 15,
              message: 'Max 15 characters!',
            },
            pattern: {
              value:
                /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,})$/u,
              message: 'Enter a valid email!',
            },
          })}
          placeholder="E-mail"
        />
        <div>
          {errors?.email && <Post>{errors?.email?.message || 'Error!'}</Post>}
        </div>
      </InputContainer>

      <InputContainer>
        <LockImage />
        <Input
          {...register('password', {
            onChange: verifyPassword,

            required: 'The field is required!',

            pattern: {
              value:
                /^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&#])[A-Za-z\\d$@$!%*?&#]){6-12}$/,
              message: 'Minimum 6 to maximum 12 characters!',
            },
          })}
          placeholder="Password"
        />
        <div>
          {errors?.password && (
            <Post>{errors?.password?.message || 'Error!'}</Post>
          )}
        </div>
      </InputContainer>

      <ProgressContainer>
        <ProgressBar style={passwordStyles} />
      </ProgressContainer>

      <InputContainer>
        <LockImage />
        <Input
          {...register('confirmpassword', {
            required: 'The field is required!',
          })}
          placeholder="Confirm password"
        />
        <div
          style={{
            height: 40,
          }}
        >
          {errors?.confirmpassword && (
            <Post>{errors?.confirmpassword?.message || 'Error!'}</Post>
          )}
        </div>
      </InputContainer>

      <InputContainer>
        <PersonImage />
        <Input
          {...register('firstname', {
            required: 'The field is required!',
            minLength: {
              value: 6,
              message: 'Minimum 10 characters!',
            },
            maxLength: {
              value: 13,
              message: 'Max 16 characters!',
            },
            pattern: {
              value: /^[a-zA-Z]|[а-яА-Я]$/,
              message: 'Firstname may contain only letters!',
            },
          })}
          placeholder="First name"
        />
        <div>
          {errors?.firstname && (
            <Post>{errors?.firstname?.message || 'Error!'}</Post>
          )}
        </div>
      </InputContainer>

      <Button
        type="submit"
        sx={{
          marginBottom: 3,
          marginTop: 2,
        }}
        variant="contained"
        // disabled={isValid}
      >
        Register
      </Button>
      <Button
        type="submit"
        color="secondary"
        variant="outlined"
        sx={ConfirmButton}
      >
        Log in
      </Button>
    </Form>
  );
};
export default RegisterForm;
