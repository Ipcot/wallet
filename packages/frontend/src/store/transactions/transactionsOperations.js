import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactions, postTransaction } from 'api/fetchTransaction';

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

const transactionsOperations = {
  fetchTransactions,
  addTransaction,
};

export default transactionsOperations;
