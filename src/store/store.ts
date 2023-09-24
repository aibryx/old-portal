import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../features/auth/api/auth.ts';
import { usersApi } from '../features/users/api/users.ts';
import { rolesApi } from '../features/users/api/roles.ts';
import notificationsReducer from '@/components/ Notifications/NotificationsSlice.ts';

export const store = configureStore({
	reducer: {
		notifications: notificationsReducer,
		[authApi.reducerPath]: authApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[rolesApi.reducerPath]: rolesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware, rolesApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch