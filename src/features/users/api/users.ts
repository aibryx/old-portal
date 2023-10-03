import { encodeEmpty, makeReadRequest } from '@/lib/api.ts';

export const API_GET_CURREN_USER_ULR = 'ums/user';

export const getCurrentUser = async () => {
	return await makeReadRequest(API_GET_CURREN_USER_ULR, encodeEmpty());
};
