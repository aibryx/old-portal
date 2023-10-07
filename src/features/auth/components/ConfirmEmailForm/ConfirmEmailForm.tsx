import { useEffect, useState } from 'react';
import { Form, Formik, FormikErrors } from 'formik';
import { useNavigate } from 'react-router';
import { clsx } from 'clsx';

import { confirmEmail, sendEmail, signIn } from '@/features/auth/api/auth.ts';
import { displayConfirmEmailFormErrors } from '@/features/auth/utils/displayConfirmEmailFormErrors.ts';
import { SignInQuery } from '@/features/auth/types/query.ts';
import { Spinner } from '@/components/Elements/Spinner';
import { useMutation } from '@/hooks/useMutation.ts';
import { useRegisterStore } from '@/stores/registerData';
import { regex } from '@/lib/regex.ts';

import styles from '@/features/auth/components/ConfirmEmailForm/ConfirmEmailForm.module.scss';

type ConfirmEmailProps = {
	email: string;
};

type CodeForConfirmEmail = {
	code: string;
};

type Taimer = {
	time: number;
	minuts: number;
	seconds: number;
};

type CodeForConfirmEmailError = Partial<Record<keyof CodeForConfirmEmail, string>>;

export const ConfirmEmailForm = ({ email }: ConfirmEmailProps) => {
	const [timer, setTimer] = useState<Taimer>({
		time: 120,
		minuts: 2,
		seconds: 0,
	});

	const navigate = useNavigate();

	const registerInfo = useRegisterStore((state) => state.registerInfo);
	const changeRegisterInfo = useRegisterStore((state) => state.changeRegisterInfo);

	const sendEmailMutation = useMutation<string>(sendEmail);
	const confirmEmailMutation = useMutation((args: { email: string; code: string }) =>
		confirmEmail(args)
	);
	const signInMutation = useMutation<SignInQuery>(signIn);

	const sendEmailAndStartTimer = async () => {
		await sendEmailMutation.mutation(email);
		setTimer({
			time: 120,
			minuts: 2,
			seconds: 0,
		});
	};

	useEffect(() => {
		const trySendEmail = async (email: string) => {
			await sendEmailMutation.mutation(email);
		};
		trySendEmail(email);
	}, [email]);

	useEffect(() => {
		setTimeout(() => {
			if (timer.time === 0) {
				return;
			}
			setTimer({
				time: timer.time - 1,
				minuts: Math.floor((timer.time - 1) / 60),
				seconds: timer.time - Math.floor((timer.time - 1) / 60) * 60 - 1,
			});
		}, 1000);
	}, [timer.time]);

	const tryConfirmEmail = async (
		code: string,
		setErrors: { (errors: FormikErrors<CodeForConfirmEmail>): void }
	) => {
		const { error } = await confirmEmailMutation.mutation({
			email,
			code,
		});
		if (error?.error) {
			displayConfirmEmailFormErrors(error.error, setErrors);
			return;
		}
		await signInMutation.mutation({
			username: registerInfo.username,
			password: registerInfo.password,
		});
		changeRegisterInfo({ username: '', email: '', password: '' });
		navigate('/articles');
	};

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form}>
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/logo.svg" alt="logo" />
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
									<label className={clsx('label', styles.label)}>
										Код подтверждения
									</label>
									<div className={clsx('control', styles.control)}>
										<input
											className={clsx(
												'input',
												errors.code && 'is-danger',
												styles.username
											)}
											name="code"
											value={values.code}
											onChange={handleChange}
											type="text"
											placeholder="Введите код для подтверждения адреса электронной почты"
										/>
										{errors.code && (
											<p className="help is-danger">{errors.code}</p>
										)}
									</div>
								</div>
							</div>

							<div className={styles.confirm_button_wrapper}>
								<button
									type="submit"
									className={clsx(
										'button is-primary',
										!isValid && 'is-disabled',
										styles.confirm_button
									)}
									disabled={
										!isValid || Object.values(values).some((v) => v === '')
									}
								>
									{confirmEmailMutation.isLoading ? <Spinner /> : 'Отправить код'}
								</button>
							</div>
							<div className={styles.timer}>
								{timer.time ? (
									<>
										Вы можете отправить новый код через: {timer.minuts}:
										{timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}
									</>
								) : (
									<a className="is-primary" onClick={sendEmailAndStartTimer}>
										Отправить код еще раз
									</a>
								)}
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
