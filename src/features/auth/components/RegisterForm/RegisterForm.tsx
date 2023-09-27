import styles from './RegisterForm.module.scss';
import { clsx } from 'clsx';
import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, { SetStateAction, useState } from 'react';
import { regex } from '@/lib/regex.ts';

export const RegisterForm = () => {
	const navigate = useNavigate();

	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	type ErrorInputsType = {
		firstName: boolean;
		lastName: boolean;
		userName: boolean;
		email: boolean;
		password: boolean;
		confirmPassword: boolean;
	};

	const [errorInputs, setErrorInputs] = useState<ErrorInputsType>({
		firstName: false,
		lastName: false,
		userName: false,
		email: false,
		password: false,
		confirmPassword: false,
	});

	console.log(errorInputs);

	const isDisabledSignUpButton =
		!Object.values(errorInputs).every((error) => !error) ||
		!userName ||
		!email ||
		!password ||
		password !== confirmPassword;

	const handleInputChange = (
		value: string,
		inputName: string,
		setInput: React.Dispatch<SetStateAction<string>>
	) => {
		setInput(value);
		if (inputName === 'confirmPassword') {
			handleConfirmPasswordChange(value);
			return;
		}
		if (!regex[inputName].test(value) && value !== '') {
			setErrorInputs({ ...errorInputs, [inputName]: true });
		} else {
			setErrorInputs({ ...errorInputs, [inputName]: false });
		}
	};

	const handleConfirmPasswordChange = (value: string) => {
		if (value !== password) setErrorInputs({ ...errorInputs, confirmPassword: true });
		else setErrorInputs({ ...errorInputs, confirmPassword: false });
	};

	const trySignUp = () => {};

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

				<div className={styles.inputs}>
					<div className={clsx('field', styles.field)}>
						<label className={clsx('label', styles.label)}>Имя пользователя</label>
						<div className={clsx('control', styles.control)}>
							<input
								className={clsx(
									'input ' + `${errorInputs.userName ? 'is-danger' : null}`,
									styles.username
								)}
								value={userName}
								onChange={(event) =>
									handleInputChange(event.target.value, 'userName', setUserName)
								}
								type="text"
								placeholder="Введите имя пользователя"
							/>
							{errorInputs.userName ? (
								<p className="help is-danger">Некорректное имя пользователя</p>
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
									'input ' + `${errorInputs.email ? 'is-danger' : null}`,
									styles.email
								)}
								value={email}
								onChange={(event) =>
									handleInputChange(event.target.value, 'email', setEmail)
								}
								type="email"
								placeholder="Введите имя пользователя"
							/>
							{errorInputs.email ? (
								<p className="help is-danger">
									Некорректный адрес электронной почты
								</p>
							) : null}
						</div>
					</div>

					<div className={clsx('field', styles.field)}>
						<label className={clsx('label', styles.label)}>Пароль</label>
						<div className={clsx('control', styles.control)}>
							<input
								className={clsx(
									'input ' + `${errorInputs.password ? 'is-danger' : null}`,
									styles.password
								)}
								value={password}
								onChange={(event) =>
									handleInputChange(event.target.value, 'password', setPassword)
								}
								type="text"
								placeholder="Введите пароль"
							/>
							{errorInputs.password ? (
								<p className="help is-danger">Слишком легкий пароль</p>
							) : null}
						</div>
					</div>

					<div className={clsx('field', styles.field)}>
						<label className={clsx('label', styles.label)}>Повторите пароль</label>
						<div className={clsx('control', styles.control)}>
							<input
								className={clsx(
									'input ' +
										`${
											confirmPassword !== password &&
											confirmPassword.length !== 0
												? 'is-danger'
												: null
										}`,
									styles.confirm_password
								)}
								value={confirmPassword}
								onChange={(event) =>
									handleInputChange(
										event.target.value,
										'confirmPassword',
										setConfirmPassword
									)
								}
								type="text"
								placeholder="Повторите пароль"
							/>
							{confirmPassword !== password && confirmPassword.length !== 0 ? (
								<p className="help is-danger">Пароли не совпадают</p>
							) : null}
						</div>
					</div>
				</div>

				<div className={styles.register_wrapper}>
					<button
						onClick={trySignUp}
						disabled={isDisabledSignUpButton}
						className={clsx('button is-primary is-disabled', styles.register)}
					>
						Зарегистрироваться
					</button>
				</div>

				<div className={styles.to_login}>
					<span>Есть аккаунт?</span>
					<NavLink to={'/auth/login'}>Войти</NavLink>
				</div>
			</div>
		</div>
	);
};
