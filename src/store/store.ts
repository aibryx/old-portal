import { create } from 'zustand';

export type NotificationItem = {
	message: string;
	id: string;
};

type NotificationState = {
	notifications: Array<NotificationItem>,
  addNotification: (notification: NotificationItem) => void;
  deleteNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
	notifications:[],

	addNotification: (notification) =>
		set((state ) => ({
			notifications: [...state.notifications, notification]
		})),

	deleteNotification: (id: string) =>
		set((state: { notifications: Array<NotificationItem> }) => ({
			notifications: state.notifications.filter((n) => n.id !== id),
		})),
}));
