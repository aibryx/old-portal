import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/api.ts';
import { UserResponse } from '../types/response.ts';
import { SignInQuery } from '../types/query.ts';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/ums/` }),
	endpoints: (builder) => ({
		signIn: builder.mutation<UserResponse, SignInQuery>({
			query: (body) => ({
				url: 'auth/signIn',
				method: 'POST',
				body: body,
				credentials: 'include',
			}),
		}),
		logout: builder.mutation<any, null>({
			query: () => ({
				url: 'auth/logout',
				method: 'POST',
				credentials: 'include',
			}),
		}),
		refresh: builder.mutation<UserResponse, null>({
			query: () => ({
				url: 'auth/refresh_tokens',
				method: 'POST',
				credentials: 'include',
			}),
		}),
	}),
});

export const { useSignInMutation, useLogoutMutation, useRefreshMutation } = authApi;
