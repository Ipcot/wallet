import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Transaction'],
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => '/transactions',
      providesTags: ['Transaction'],
    }),
    addTransaction: builder.mutation({
      query: newTransaction => ({
        url: '/transactions',
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: ['Transaction'],
    }),
    getAllCategories: builder.query({
      query: () => '/transactions/categories',
      providesTags: ['Transaction'],
    }),
    getSortedTransactions: builder.query({
      query: (year, month) => `/transactions/stats/${year}/${month}`,
      providesTags: ['Transaction'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTransactionsQuery,
  useAddTransactionMutation,
  useGetAllCategoriesQuery,
  useGetSortedTransactionsQuery,
} = transactionsApi;
