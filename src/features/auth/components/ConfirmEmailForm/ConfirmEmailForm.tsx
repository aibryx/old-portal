import styles from '@/features/auth/components/ConfirmEmailForm/ConfirmEmailForm.module.scss';
import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { Form, Formik, FormikErrors } from 'formik';
import { regex } from '@/lib/regex.ts';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { confirmEmail, sendEmail } from '@/features/auth/api/auth.ts';
import { useMutation } from '@/hooks/useMutation.ts';
import { Spinner } from '@/components/Elements/Spinner/Spinner.tsx';
import { displayConfirmEmailFormErrors } from '@/features/auth/utils/displayConfirmEmailFormErrors.ts';

type ConfirmEmailProps = {
	email: string;
};

type CodeForConfirmEmail = {
	code: string;
};

type CodeForConfirmEmailError = Partial<Record<keyof CodeForConfirmEmail, string>>;

export const ConfirmEmailForm = ({ email }: ConfirmEmailProps) => {
	const navigate = useNavigate();

	const sendEmailMutation = useMutation<string>(sendEmail);

	const confirmEmailMutation = useMutation((args: { email: string; code: string }) =>
		confirmEmail(args)
	);

	useEffect(() => {
		const trySendEmail = async (email: string) => {
			await sendEmailMutation.mutation(email);
		};
		trySendEmail(email);
	}, [email, sendEmailMutation]);

	const tryConfirmEmail = async (
		code: string,
		setErrors: { (errors: FormikErrors<CodeForConfirmEmail>): void }
	) => {
		const { error } = await confirmEmailMutation.mutation({
			email,
			code,
		});
		if (error) {
			displayConfirmEmailFormErrors(error.error, setErrors);
			return;
		}
		navigate('/articles');
	};

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form}>
				<BackMark back={() => navigate('/auth/register')} />

				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/logo.png" alt="logo" />
					</div>
					<div className={styles.title}>MilkHunters ID</div>
					<div className={styles.suptitle}>Подтвердите адрес {email}</div>
				</div>

				<Formik<CodeForConfirmEmail>
					initialValues={{
						code: '',
					}}
					validate={(values) => {
						const errors: CodeForConfirmEmailError = {};
						if (!regex.codeForConfirmEmail.test(values.code) && values.code !== '') {
							errors.code = 'Невалидный код';
						}
						return errors;
					}}
					onSubmit={async (values, { setErrors }) => {
						await tryConfirmEmail(values.code, setErrors);
					}}
				>
					{({ values, errors, handleChange, isValid }) => (
						<Form>
							<div className={styles.inputs}>
								<div className={clsx('field', styles.field)}>
									<label className={clsx('label', styles.label)}>Код</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input ' + `${errors.code ? 'is-danger' : null}`,
												styles.username
											)}
											name="code"
											value={values.code}
											onChange={handleChange}
											type="text"
											placeholder="Введите код для подтверждения адреса электронной почты"
										/>
										{errors.code ? (
											<p className="help is-danger">{errors.code}</p>
										) : null}
									</div>
								</div>
							</div>

							<div className={styles.register_wrapper}>
								<button
									type="submit"
									className={clsx(
										'button is-primary is-disabled',
										styles.register
									)}
									disabled={
										!isValid || Object.values(values).some((v) => v === '')
									}
								>
									{confirmEmailMutation.isLoading ? <Spinner /> : 'Отправить код'}
								</button>
							</div>
						</Form>
					)}
				</Formik>

				<div className={styles.to_login}>
					<span>Есть аккаунт?</span>
					<NavLink to={'/auth/login'}>Войти</NavLink>
				</div>
			</div>
		</div>
	);
};
