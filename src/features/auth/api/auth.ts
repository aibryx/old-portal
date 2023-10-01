import { encodeEmpty, encodeJson, makeWriteRequest } from '@/lib/api.ts';
import { SignInQuery, SignUpQuery } from "@/features/auth/types/query.ts";

export const API_SIGNIN_URL = 'ums/auth/signIn';
export const API_SIGNUP_URL = 'ums/auth/signUp';
export const API_SEND_EMAIL_URL = 'ums/auth/send';
export const API_CONFIRM_EMAIL_URL = 'ums/auth/confirm';

export const signIn = async (body: SignInQuery) => {
	return await makeWriteRequest(API_SIGNIN_URL, encodeJson(body));
};

export const signUp = async (body: SignUpQuery) => {
	return await makeWriteRequest(API_SIGNUP_URL, encodeJson(body));
};

export const sendEmail = async (email: string) => {
	return await makeWriteRequest(`${API_SEND_EMAIL_URL}/${email}`, encodeEmpty());
};

export const confirmEmail = async (args: { email: string; code: string }) => {
	const url = `${API_CONFIRM_EMAIL_URL}/${args.email}?code=${args.code}`;
	return await makeWriteRequest(url, encodeEmpty());
};
