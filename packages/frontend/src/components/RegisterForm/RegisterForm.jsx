import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
/* import EnvelopeImg from 'assets/icons/envelope.svg'; */
/* import LockImg from 'assets/icons/lock.svg'; */
/* import LogoImg from 'assets/icons/logo.svg'; */
/* import PersonImg from 'assets/icons/person.svg'; */
import { passwordStrength } from 'check-password-strength';
import { ReactComponent as LogoImg } from 'assets/icons/logo.svg';

import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  /*  LogoImage, */
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
    dispatch(authOperations.register(credentials));
    reset();
  };

  const [password, setPassword] = useState('');

  const result = passwordStrength(password);

  const handleChange1 = e => {
    setPassword(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  const changeColor = () => {
    switch (result.value) {
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

  const changeProgressBarSettings = () => ({
    width: `${(result.id + 1) * 25}%`,
    background: changeColor(),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BoxLogo>
        {/*  <LogoImage alt="logo" src={`${LogoImg}`} /> */}
        <LogoImg style={{ width: '38px', height: '30px' }} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>

      <InputContainer>
        {/*  <EnvelopeImage alt="envelope" src={`${EnvelopeImg}`} /> */}
        <EnvelopeImage />

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
        {/* <LockImage alt="lock" src={`${LockImg}`} /> */}
        <LockImage />
        <Input
          onChange={e => {
            console.log(e.currentTarget.value);
          }}
          {...register('password', {
            required: 'The field is required!',
            // pattern: {
            //   value:
            //     /^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&#])[A-Za-z\\d$@$!%*?&#]){6-12}$/,
            //   message: 'Minimum 6 to maximum 12 characters!',
            // },
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
        <ProgressBar style={changeProgressBarSettings()} />
      </ProgressContainer>

      <InputContainer>
        {/* <LockImage alt="lock" src={`${LockImg}`} /> */}
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
          {errors?.email && <Post>{errors?.email?.message || 'Error!'}</Post>}
        </div>
      </InputContainer>

      <InputContainer>
        {/*  <PersonImage alt="lock" src={`${PersonImg}`} /> */}
        <PersonImage />
        <Input
          {...register('firstname', {
            required: 'The field is required!',
            pattern: {
              value:
                /^([a-zA-Z]|[а-яА-Я]){6,16}$/ /* {1}Первый символ только цифра или буква */,
              message:
                'Firstname may contain only letters! Minimum 6 to maximum 12 characters!',
              /*  minLength: {
                value: 3,
                message: 'Minimum 3 to maximum 12 characters!',
              }, */
            },
          })}
          placeholder="First name"
        />

        {/*  {error.name && <Post>'Минимум 5 символов'</Post>}
        <hr /> */}
        <div /* style={{ height: 40 }} */>
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
        /* disabled={isValid} */
        color="secondary"
        variant="outlined"
        /* sx={{
          width: '300px',
        }} */
      >
        Log in
      </Button>
    </Form>
  );
};
export default RegisterForm;
