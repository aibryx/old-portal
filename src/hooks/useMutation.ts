import { useCallback, useState } from 'react';
import { BaseResponse } from '@/types';

export const useMutation = <T>(mutationFn: (body: T) => Promise<Response>) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const mutation = useCallback(
		async (body: T) => {
			setIsLoading(true);

			try {
				const response: Response = await mutationFn(body);
				if (!response.ok) {
					const errorData: BaseResponse = await response.json();
					return { data: null, status: response.status, error: errorData };
				} else {
					const responseData: BaseResponse = await response.json();
					return { data: responseData, status: response.status, error: null };
				}
			} catch (error) {
				return { data: null, error: error as BaseResponse };
			} finally {
				setIsLoading(false);
			}
		},
		[mutationFn]
	);

	return { isLoading, mutation };
};
