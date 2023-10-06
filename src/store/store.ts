import { create } from 'zustand';

export type NotificationItem = {
	message: string;
	id: string;
};

export type RegisterInfo = {
	username: string;
	email: string;
	password: string;
};

type NotificationState = {
	notifications: Array<NotificationItem>;
	addNotification: (notification: NotificationItem) => void;
	deleteNotification: (id: string) => void;
	deleteAllNotifications: () => void;
};

type RegisterState = {
	registerInfo: RegisterInfo;
	changeRegisterInfo: (nextInfo: RegisterInfo) => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
	notifications: [],

	addNotification: (notification) =>
		set((state) => ({
			notifications: [...state.notifications, notification],
		})),

	deleteNotification: (id: string) =>
		set((state: { notifications: Array<NotificationItem> }) => ({
			notifications: state.notifications.filter((n) => n.id !== id),
		})),

	deleteAllNotifications: () =>
		set(() => ({
			notifications: [],
		})),
}));

export const useRegisterStore = create<RegisterState>((set) => ({
	registerInfo: { username: '', email: '', password: '' },

	changeRegisterInfo: (nextInfo) =>
		set(() => ({
			registerInfo: nextInfo,
		}))

}));
