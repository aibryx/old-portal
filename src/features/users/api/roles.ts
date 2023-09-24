import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/lib/api.ts';

export const rolesApi = createApi({
	reducerPath: 'rolesApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/role/` }),
	endpoints: (builder) => ({
		newAccess: builder.query({
			query: (body) => {
				return {
					url: `access/new?role_id=${body.role_id}&access_tag=${body.access_tag}`,
					credentials: 'include',
				};
			},
		}),
	}),
});

export const { useNewAccessQuery } = rolesApi;
