import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactionsOperations';

const initialState = {
  transactions: [],
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
      state.items = payload;
      state.loading = false;
    },
    [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
  },
});

export default transactionsSlice.reducer;
