import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/api.ts';
import { UserResponse } from '../../auth/types/response.ts';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/ums/` }),
	endpoints: (builder) => ({
		getCurrentUser: builder.query<UserResponse, null>({
			query: () => {
				return {
					url: '/user',
					credentials: 'include',
				};
			},
		}),
	}),
});

export const { useGetCurrentUserQuery } = usersApi;
