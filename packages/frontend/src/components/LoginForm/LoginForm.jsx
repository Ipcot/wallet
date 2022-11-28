import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

import {
  IconEye,
  Link,
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
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = data => {
    console.log('data: ', data);
    dispatch(authOperations.logIn(data));
    reset();
  };

  const [type, setType] = useState('password');

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <Form autoComplete="new-password" onSubmit={handleSubmit(onSubmit)}>
      <BoxLogo>
        <LogoImg style={{ width: '38px', height: '30px' }} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>
      <InputContainer>
        <EnvelopeImage alt="envelope" src={`${EnvelopeImg}`} />
        <Input
          autoComplete="new-password"
          {...register('email', {
            required: 'The field is required!',
            minLength: {
              value: 7,
              message: 'Minimum 7 characters!',
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
          autoComplete="new-password"
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
          type={type}
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
              value: /(([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))$/,
              message: 'Enter a valid password!',
            },
          })}
          placeholder="Password"
        />

        <div>
          {errors?.password && (
            <Post>{errors?.password?.message || 'Error!'}</Post>
          )}
        </div>
        <IconEye>
          <span onClick={handleToggle}>
            {type === 'password' ? (
              <BsEyeSlash size={20} />
            ) : (
              <BsEye size={20} />
            )}
          </span>
        </IconEye>
      </InputContainer>
      <InputContainer></InputContainer>

      <Button
        type="submit"
        sx={{
          marginBottom: 3,
          marginTop: 2,
        }}
        variant="contained"
        disabled={!isValid}
      >
        Log in
      </Button>
      <Button type="button" color="secondary" variant="outlined">
        <Link to="/auth/register">Register</Link>
      </Button>
    </Form>
  );
};
export default LoginForm;
