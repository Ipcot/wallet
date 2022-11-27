import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactionsOperations';

const initialState = {
  transactions: [],
  transactionsSortedByCategory: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [transactionsOperations.fetchTransactions.fulfilled]: (
      state,
      { payload }
    ) => {
      state.transactions = payload;
      state.loading = false;
    },
    [transactionsOperations.fetchTransactionsByCategory.fulfilled]: (
      state,
      { payload }
    ) => {
      state.transactionsSortedByCategory = payload;
      state.loading = false;
    },
    [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.loading = false;
    },
  },
});

export default transactionsSlice.reducer;
