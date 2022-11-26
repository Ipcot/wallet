import Media from 'react-media';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
/* import LogoImg from 'assets/icons/logo.svg'; */
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';

import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  /* LogoImage, */
  LogoTitle,
  BoxLogo,
  Post,
  ProgressContainer,
  ProgressBar,
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
            pattern: {
              value:
                /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,})$/u,

              message: 'Minimum 5 symbols!Minimum 6 to maximum 12 characters!',
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

      <Button
        type="submit"
        sx={{
          marginBottom: 3,
          marginTop: 2,
          sm: 320,
          width: '280px',
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
