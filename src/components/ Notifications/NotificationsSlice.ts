import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
	id: string;
	message: string;
}

interface NotificationsStore {
	notifications: Notification[];
}
const initialState: NotificationsStore = {
	notifications: [],
};

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<Notification>) => {
			state.notifications.push(action.payload);
		},
		deleteNotification: (state, action: PayloadAction<string>) => {
			state.notifications = state.notifications.filter(
				(notification) => notification.id !== action.payload
			);
		},
	},
});

export const { addNotification, deleteNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
