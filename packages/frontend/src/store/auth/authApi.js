import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants';
console.log(BASE_URL);

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wallet-goit.onrender.com/api',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    register: builder.mutation({
      query: body => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.query({
      query: () => '/users/logout',
      providesTags: ['Auth'],
    }),
    current: builder.query({
      query: () => '/users/current',
      providesTags: ['Auth'],
    }),
    refresh: builder.mutation({
      query: body => ({
        url: '/users/refresh',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useLogoutQuery,
  useRefreshMutation,
} = authApi;
