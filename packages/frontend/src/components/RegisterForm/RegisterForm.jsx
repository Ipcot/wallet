import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { passwordStrength } from 'check-password-strength';
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

import {
  IconEye,
  Link,
  /* ConfirmButton, */
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
import { useState } from 'react';

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
    if (data.password !== data.confirmpassword) {
      toast.error('Password doesnt match!');
      return;
    }

    dispatch(authOperations.register(credentials));
    reset();
  };

  const [passwordStyles, setPasswordStyles] = useState({
    width: '95%',
    background: ' #d3f9f0',
  });

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

  const [type, setType] = useState('password');

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
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
          autoComplete="new-password"
          {...register('email', {
            required: 'The field is required!',
            minLength: {
              value: 7,
              message: 'Minimum 7 characters!',
            },

            pattern: {
              value:
                /*  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,})$/u, */
                /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,}[0-9A-Za-z]{1})$/u,
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
          autoComplete="new-password"
          type={type}
          {...register('password', {
            onChange: verifyPassword,

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

              message: 'Enter a valid password!"',
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

      <ProgressContainer>
        <ProgressBar style={passwordStyles} />
      </ProgressContainer>

      <InputContainer>
        <LockImage />
        <Input
          type={type}
          {...register('confirmpassword', {
            required: 'The field is required!',
          })}
          placeholder="Confirm password"
        />
        <div>
          {errors?.confirmpassword && (
            <Post>{errors?.confirmpassword?.message || 'Error!'}</Post>
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

      <InputContainer>
        <PersonImage />
        <Input
          {...register('firstname', {
            required: 'The field is required!',
            minLength: {
              value: 3,
              message: 'Minimum 3 characters!',
            },
            maxLength: {
              value: 12,
              message: 'Max 12 characters!',
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
        /*  sx={ConfirmButton} */
        variant="contained"
        disabled={!isValid}
      >
        Register
      </Button>

      <Button
        type="button"
        color="secondary"
        variant="outlined"
        /* sx={ConfirmButton} */
      >
        <Link to="/auth/login">Log in</Link>
      </Button>
    </Form>
  );
};
export default RegisterForm;
