import { BaseError } from '@/types';
import { FormikErrors } from 'formik';

export const displayConfirmEmailFormErrors = (
	error: BaseError,
	setErrors: <T>(errors: FormikErrors<T>) => void
) => {
	const { content } = error;
	console.log(content);
	if (typeof content === 'string') {
		setErrors({ code: content });
	}
};
