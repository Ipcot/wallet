import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { transactionsApi } from './transactions/transactionsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    transactionsApi.middleware,
  ],
});
