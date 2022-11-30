import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactions,
  postTransaction,
  getTransactionsByCategory,
} from 'api/fetchTransaction';

const fetchTransactions = createAsyncThunk(
  '/transactions',
  async (_, thunkAPI) => {
    try {
      const result = await getTransactions();
      return result;
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
      // console.log(year, month);
      const result = await getTransactionsByCategory(year, month);
      console.log(result);
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
