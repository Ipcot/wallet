import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['Transaction'],
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => `/transactions`,
      providesTags: ['Transaction'],
    }),
    addTransaction: builder.mutation({
      query: newTransaction => ({
        url: '',
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTransactionsQuery } = transactionsApi;
