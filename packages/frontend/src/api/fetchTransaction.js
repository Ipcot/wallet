import { apiInstance } from 'api';

export const getTransactions = () => apiInstance.get('/transactions');

export const postTransaction = transaction =>
  apiInstance.post('/transactions', transaction);
