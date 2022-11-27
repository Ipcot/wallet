import Media from 'react-media';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';
import InputAdornments from './showPassword';

import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoTitle,
  BoxLogo,
  Post,
} from './LoginForm.styled';
import { useState } from 'react';

const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = data => {
    alert(JSON.stringify('Отправлено:', data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BoxLogo>
        {/* <LogoImage alt="logo" src={`${LogoImg}`} /> */}
        <LogoImg style={{ width: '38px', height: '30px' }} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>
      <InputContainer>
        <EnvelopeImage alt="envelope" src={`${EnvelopeImg}`} />
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
        <LockImage alt="lock" src={`${LockImg}`} />

        <Input
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
          {...register('password', {
            required: 'The field is required!',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters!',
            },
            maxLength: {
              value: 16,
              message: 'Max 16 characters!',
            },

            pattern: {
              value:
                /^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&#])[A-Za-z\\d$@$!%*?&#])$/,
              message: 'Enter a valid password!',
            },
          })}
          placeholder="Password"
        />
        {/* <InputAdornments /> */}
        <div>
          {errors?.password && (
            <Post>{errors?.password?.message || 'Error!'}</Post>
          )}
        </div>
      </InputContainer>
      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
        <InputAdornments />

        {/* <Input
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
          {...register('password', {
            required: 'The field is required!',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters!',
            },
            maxLength: {
              value: 16,
              message: 'Max 16 characters!',
            },

            pattern: {
              value:
                /^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&#])[A-Za-z\\d$@$!%*?&#])$/,
              message: 'Enter a valid password!',
            },
          })}
          placeholder="Password"
        />
        <div>
          {errors?.password && (
            <Post>{errors?.password?.message || 'Error!'}</Post>
          )}
        </div> */}
      </InputContainer>

      <Button
        type="submit"
        sx={{
          marginBottom: 3,
          marginTop: 2,
        }}
        variant="contained"
        disabled={isValid}
      >
        Log in
      </Button>
      <Button
        type="submit"
        /* disabled={isValid} */
        color="secondary"
        variant="outlined"
        /* sx={{
          ml: 55,
          mt: -3,
          width: '16px',
          height: '16px',
        }} */
      >
        Register
      </Button>
    </Form>
  );
};
export default LoginForm;
