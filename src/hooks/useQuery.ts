import { useCallback, useEffect, useState } from 'react';
import { BaseResponse } from '@/types';

export const useQuery = (queryFn: () => Promise<Response>) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<BaseResponse>(null);
	const [error, setError] = useState<BaseResponse>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const response: Response = await queryFn();
			if (!response.ok) {
				const errorData: BaseResponse = await response.json();
				setError(errorData);
				setData(null);
			} else {
				const responseData: BaseResponse = await response.json();
				setData(responseData);
				setError(null);
			}
		} catch (error) {
			setError(error as BaseResponse);
			setData(null);
		} finally {
			setIsLoading(false);
		}
	}, [queryFn]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, isLoading, error };
};
