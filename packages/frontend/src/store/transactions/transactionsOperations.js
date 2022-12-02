import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactions,
  postTransaction,
  getTransactionsByCategory,
} from 'api/fetchTransaction';
import { fetchCurrent } from 'api/fetchUser';

const fetchTransactions = createAsyncThunk(
  '/transactions',
  async (_, thunkAPI) => {
    try {
      const result = await getTransactions();
      console.log('result: ', result);
      const user = await fetchCurrent();
      const response = {
        balance: user.data.balance,
        data: result.data,
      };
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const addTransaction = createAsyncThunk('/transactions', async data => {
  try {
    await postTransaction(data);
    return await getTransactions();
  } catch (error) {
    console.log(error.message);
  }
});

const fetchTransactionsByCategory = createAsyncThunk(
  '/stats/:year/:month',
  async ({ year, month }) => {
    try {
      const result = await getTransactionsByCategory(year, month);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const transactionsOperations = {
  fetchTransactions,
  addTransaction,
  fetchTransactionsByCategory,
};

export default transactionsOperations;
