import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { useSignInMutation } from '../../api/auth.ts';
import { Spinner } from '@/components/Elements/Spinner/Spinner.tsx';
import { useDispatch } from 'react-redux';
import { addNotification } from '@/components/ Notifications/NotificationsSlice.ts';
import { Notifications } from '@/components/ Notifications/Notifications.tsx';
import { nanoid } from 'nanoid';

type LoginFormProps = {
	onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('aibryx');
	const [password, setPassword] = useState<string>('qwerty123');
	const [signIn, { isLoading, isError }] = useSignInMutation();

	const trySignIn = async () => {
		const response = await signIn({
			username,
			password,
		});

		if (!response.error) {
			onSuccess();
			return;
		}
		dispatch(addNotification({ id: nanoid(), message: 'Неверный логин или пароль!' }));

		console.log(response);
	};

	const handlePasswordVisibleClick = (e: React.MouseEvent<HTMLElement>) => {
		setIsPasswordVisible((i) => !i);
		e.stopPropagation();
	};

	return (
		<div className={styles.form_wrapper}>
			<Notifications />
			<div className={styles.form}>
				<BackMark back={() => navigate(-1)} />
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/logo.png" />
					</div>
					<div className={styles.title}>MilkHunters ID</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Имя пользователя</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.username)}
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							type="text"
							placeholder="Введите имя пользователя"
						/>
					</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Пароль</label>
					<div className={clsx('control has-icons-right', styles.control)}>
						<input
							className={clsx('input', styles.password)}
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							placeholder="Введите пароль"
						/>
						<div
							onClick={(event) => handlePasswordVisibleClick(event)}
							className={clsx('icon is-small is-right')}
						>
							{isPasswordVisible ? (
								<i
									onClick={(event) => handlePasswordVisibleClick(event)}
									className={clsx('fi fi-rr-eye', styles.password_visible)}
								></i>
							) : (
								<i
									onClick={(event) => handlePasswordVisibleClick(event)}
									className={clsx(
										'fi fi-rr-eye-crossed',
										styles.password_visible
									)}
								></i>
							)}
						</div>
					</div>
					<div className={styles.forgot_password}>
						<NavLink className={styles.forgot_password} to={'/auth/reset/password'}>
							Забыли пароль?
						</NavLink>
					</div>
				</div>

				<div className={styles.login_wrapper}>
					<button
						onClick={() => trySignIn()}
						className={clsx('button is-primary', styles.login)}
					>
						{isLoading ? <Spinner /> : 'Войти'}
					</button>
				</div>

				<div className={styles.to_register}>
					<span>Нет аккаунта?</span>
					<NavLink to={'/auth/register'}>Зарегистрироваться</NavLink>
				</div>
			</div>
		</div>
	);
};
