import { apiInstance } from 'api';

export const getTransactions = () => apiInstance.get('/transactions');

export const postTransaction = transaction =>
  apiInstance.post('/transactions', transaction);

export const getTransactionsByCategory = (year, month) =>
  apiInstance.get(`/transactions/stats/${year}/${month}`);
