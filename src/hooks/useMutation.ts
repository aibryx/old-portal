import { useState } from 'react';
import { BaseResponse } from '@/types';

export const useMutation = <T>(mutationFn: (body: T) => Promise<Response>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = async (body: T) => {
    setIsLoading(true);

    try {
      const response: Response = await mutationFn(body);
      if (!response.ok) {
        const errorData: BaseResponse = await response.json();
        setIsLoading(false);
        return { data: null, error: errorData };
      } else {
        const responseData: BaseResponse = await response.json();
        setIsLoading(false);
        return { data: responseData, error: null };
      }
    } catch (error) {
      setIsLoading(false);
      return { data: null, error: error as BaseResponse };
    }
  };

  return { isLoading, mutation };
};
