import styles from './RegisterForm.module.scss';
import { clsx } from 'clsx';
import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { regex } from '@/lib/regex.ts';
import { Form, Formik, FormikErrors } from 'formik';
import { signUp } from '@/features/auth/api/auth.ts';

import { Spinner } from '@/components/Elements/Spinner/Spinner.tsx';
import { displayRegisterFormErrors } from '@/features/auth/utils/displayRegisterFormErrors.ts';
import React, { SetStateAction } from 'react';
import { useMutation } from '@/hooks/useMutation.ts';
import { SignUpQuery } from '@/features/auth/types/query.ts';

type RegisterForm = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type RegisterErrors = Partial<Record<keyof RegisterForm, string>>;

type RegisterFormProps = {
	setEmail: React.Dispatch<SetStateAction<string>>;
};

export const RegisterForm = ({ setEmail }: RegisterFormProps) => {
	const navigate = useNavigate();

	const signUpMutation = useMutation<SignUpQuery>(signUp);

	const initialValues: RegisterForm = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const trySignUp = async (
		values: RegisterForm,
		setErrors: (errors: FormikErrors<RegisterErrors>) => void
	) => {
		const { error } = await signUpMutation.mutation(values);
		if (error) {
			displayRegisterFormErrors(error.error, setErrors);
			return;
		}
		setEmail(values.email);
	};

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form}>
				<BackMark back={() => navigate(-1)} />

				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/logo.png" alt="logo" />
					</div>
					<div className={styles.title}>MilkHunters ID</div>
				</div>

				<Formik<RegisterForm>
					initialValues={initialValues}
					validate={(values) => {
						const errors: RegisterErrors = {};
						if (!regex.username.test(values.username) && values.username !== '') {
							errors.username = 'Невалидное имя пользователя';
						}
						if (!regex.email.test(values.email) && values.email !== '') {
							errors.email = 'Невалидный адрес электронной почты';
						}
						if (!regex.password.test(values.password) && values.password !== '') {
							errors.password = 'Невалидный пароль';
						}
						if (
							values.confirmPassword !== values.password &&
							values.confirmPassword !== ''
						) {
							errors.confirmPassword = 'Пароли не совпадают';
						}
						return errors;
					}}
					onSubmit={async (values, { setErrors }) => {
						await trySignUp(values, setErrors);
					}}
				>
					{({ values, errors, handleChange, isValid }) => (
						<Form>
							<div className={styles.inputs}>
								<div className={clsx('field', styles.field)}>
									<label className={clsx('label', styles.label)}>
										Имя пользователя
									</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input ' +
													`${errors.username ? 'is-danger' : null}`,
												styles.username
											)}
											name="username"
											value={values.username}
											onChange={handleChange}
											type="text"
											placeholder="Введите имя пользователя"
										/>
										{errors.username ? (
											<p className="help is-danger">{errors.username}</p>
										) : null}
									</div>
								</div>

								<div className={clsx('field', styles.field)}>
									<label className={clsx('label', styles.label)}>
										Адрес электронной почты
									</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input ' + `${errors.email ? 'is-danger' : null}`,
												styles.email
											)}
											name="email"
											value={values.email}
											onChange={handleChange}
											type="text"
											placeholder="Введите aдрес электронной почты"
										/>
										{errors.email ? (
											<p className="help is-danger">{errors.email}</p>
										) : null}
									</div>
								</div>

								<div className={clsx('field', styles.field)}>
									<label className={clsx('label', styles.label)}>Пароль</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input ' +
													`${errors.password ? 'is-danger' : null}`,
												styles.password
											)}
											name="password"
											value={values.password}
											onChange={handleChange}
											type="text"
											placeholder="Введите пароль"
										/>
										{errors.password ? (
											<p className="help is-danger">{errors.password}</p>
										) : null}
									</div>
								</div>

								<div className={clsx('field', styles.field)}>
									<label className={clsx('label', styles.label)}>
										Повторите пароль
									</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input ' +
													`${
														errors.confirmPassword ? 'is-danger' : null
													}`,
												styles.confirm_password
											)}
											name="confirmPassword"
											value={values.confirmPassword}
											onChange={handleChange}
											type="text"
											placeholder="Повторите пароль"
										/>
										{errors.confirmPassword ? (
											<p className="help is-danger">
												{errors.confirmPassword}
											</p>
										) : null}
									</div>
								</div>
							</div>

							<div className={styles.register_wrapper}>
								<button
									type="submit"
									className={clsx('button is-primary', styles.register)}
									disabled={
										!isValid || Object.values(values).some((v) => v === '')
									}
								>
									{signUpMutation.isLoading ? <Spinner /> : 'Зарегистрироваться'}
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
