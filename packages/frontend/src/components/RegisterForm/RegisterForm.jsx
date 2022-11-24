import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import LogoImg from 'assets/icons/logo.svg';
import PersonImg from 'assets/icons/person.svg';
import { passwordStrength } from 'check-password-strength';
import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoImage,
  LogoTitle,
  BoxLogo,
  PersonImage,
  Post,
  ProgressContainer,
  ProgressBar,
} from './RegisterForm.styled';
import { useState } from 'react';

const RegisterForm = () => {
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
        <LogoImage alt="logo" src={`${LogoImg}`} />
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
        <div
          style={{
            height: 40,
          }}
        >
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

      <ProgressContainer>
        <ProgressBar style={changeProgressBarSettings()} />
      </ProgressContainer>

      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
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
        <PersonImage alt="lock" src={`${PersonImg}`} />
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
        disabled={isValid}
      >
        Log in
      </Button>
      <Button
        type="submit"
        /* disabled={isValid} */
        color="secondary"
        variant="outlined"
      >
        Register
      </Button>
    </Form>
  );
};
export default RegisterForm;

/*  <div style={{ height: 40 }}>
   {errors?.firstname && <Post>{errors?.firstname?.message || 'Error!'}</Post>}
 </div>; */

/* const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),

  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});
 */
/* { required: 'Поле обязательно к заполнению!' } */

{
  /* <div style={{ height: 40 }}>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div> */
}

/* const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();

const onSubmit = data => {
  alert(JSON.stringify(data));
}; */

/*import { Button } from '@mui/material';
import EnvelopeImg from 'assets/icons/envelope.svg';
import LockImg from 'assets/icons/lock.svg';
import LogoImg from 'assets/icons/logo.svg';
import PersonImg from 'assets/icons/person.svg';

import {
  Input,
  Form,
  InputContainer,
  EnvelopeImage,
  LockImage,
  LogoImage,
  LogoTitle,
  BoxLogo,
  PersonImage,
} from './RegisterForm.styled';

const RegisterForm = () => {
 

  return (
    <Form>
      <BoxLogo>
        <LogoImage alt="logo" src={`${LogoImg}`} />
        <LogoTitle>Wallet</LogoTitle>
      </BoxLogo>

      <InputContainer>
        <EnvelopeImage alt="envelope" src={`${EnvelopeImg}`} />
        <Input placeholder="E-mail" />
      </InputContainer>

      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
        <Input placeholder="Password" />
      </InputContainer>

      <InputContainer>
        <LockImage alt="lock" src={`${LockImg}`} />
        <Input placeholder="Confirm password" />
      </InputContainer>

      <InputContainer>
        <PersonImage alt="lock" src={`${PersonImg}`} />
        <Input placeholder="First name" />
      </InputContainer>

      <Button
        sx={{
          marginBottom: 3,
        }}
        variant="contained"
      >
        Log in
      </Button>
      <Button color="secondary" variant="outlined">
        Register
      </Button>
    </Form>
  );
};
export default RegisterForm;
 */
