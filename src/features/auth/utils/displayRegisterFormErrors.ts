import { BaseError } from '@/types';
import { FormikErrors } from 'formik';

export const displayRegisterFormErrors = (
	error: BaseError,
	setErrors: <T>(errors: FormikErrors<T>) => void
) => {
	const { content } = error;
	if (typeof content === 'string') {
		const errorField = content.split(' ').includes('email') ? 'email' : 'username';
		setErrors({ [errorField]: content });
	}
};
