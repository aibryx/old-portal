import { useState } from 'react';
import { BaseResponse } from '@/types';

export const useQuery = async (query: () => Promise<Response>) => {
	const [data, setData] = useState<Array<BaseResponse | Response | null>>([null, null]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	try {
		setIsLoading(true);
		const response: Response = await query();
		if (!response.ok) {
			setData([await response.json(), null]);
			setIsLoading(false);
		}
		setData([null, response]);
		setIsLoading(false);
	} catch (error) {
		setData([error as BaseResponse, null]);
		setIsLoading(false);
	}

	return { data, isLoading };
};
