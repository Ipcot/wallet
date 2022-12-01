import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactionsOperations';

const initialState = {
  transactions: [],
  transactionsSortedByCategory: {
    sorted: [],
    income: 0,
    expense: 0,
  },
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'stats',
  initialState,
  extraReducers: {
    [transactionsOperations.fetchTransactions.fulfilled]: (
      state,
      { payload }
    ) => {
      console.log(state.transactions);
      state.transactions = payload;
      state.loading = false;
    },
    [transactionsOperations.fetchTransactionsByCategory.fulfilled]: (
      state,
      { payload }
    ) => {
      state.transactionsSortedByCategory.sorted =
        payload.data.sortedExpensesByCategory;
      state.transactionsSortedByCategory.income = payload.data.Income;
      state.transactionsSortedByCategory.expense = payload.data.Expense;
      state.loading = false;
    },
    [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.loading = false;
    },
  },
});

export default transactionsSlice.reducer;
