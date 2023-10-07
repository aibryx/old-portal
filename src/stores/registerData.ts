import { create } from 'zustand';

export type RegisterInfo = {
	username: string;
	email: string;
	password: string;
};

type RegisterState = {
	registerInfo: RegisterInfo;
	changeRegisterInfo: (nextInfo: RegisterInfo) => void;
};

export const useRegisterStore = create<RegisterState>((set) => ({
	registerInfo: { username: '', email: '', password: '' },

	changeRegisterInfo: (nextInfo) =>
		set(() => ({
			registerInfo: nextInfo,
		})),
}));
