import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api';
import {
  fetchRegister,
  fetchCurrent,
  fetchLogin,
  fetchLogout,
} from 'api/fetchUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('users/register', async credentials => {
  try {
    const { data } = await fetchRegister(credentials);
    toast.success(`Welcome, ${data.user.name}`);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Invalid credentials');
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('users/login', async credentials => {
  try {
    const { data } = await fetchLogin(credentials);
    toast.success(`Welcome, ${data.user.name}`);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Invalid credentials');
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('users/logout', async () => {
  try {
    await fetchLogout();
    token.unset();
  } catch (error) {
    console.log('error: ', error);
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await fetchCurrent();
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
