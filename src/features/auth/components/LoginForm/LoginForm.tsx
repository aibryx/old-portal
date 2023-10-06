import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';

import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { useMutation } from '@/hooks/useMutation.ts';
import { Notifications } from '@/components/ Notifications/Notifications.tsx';
import { SignInQuery } from '@/features/auth/types/query.ts';
import { signIn } from '@/features/auth/api/auth.ts';
import { Spinner } from '@/components/Elements/Spinner/Spinner.tsx';
import { useNotificationStore } from '@/store/store.ts';

import styles from './LoginForm.module.scss';

type LoginFormProps = {
	onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
	const navigate = useNavigate();

	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const addNotification = useNotificationStore((state) => state.addNotification);
	const signInMutation = useMutation<SignInQuery>(signIn);

	const trySignIn = async () => {
		const { error } = await signInMutation.mutation({ username, password });
		if (error) {
			const id = nanoid();
			const notification = { message: 'Неверный логин или пароль', id };
			addNotification(notification);
			return;
		}
		onSuccess();
	};

	const handlePasswordVisibleClick = (event: React.MouseEvent<HTMLElement>) => {
		setIsPasswordVisible((i) => !i);
		event.stopPropagation();
	};

	return (
		<div className={styles.form_wrapper}>
			<Notifications />
			<div className={styles.form}>
				<BackMark back={() => navigate(-1)} />
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/logo.svg" alt="logo" />
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
							type={isPasswordVisible ? 'text' : 'password'}
							placeholder="Введите пароль"
						/>
						<span
							onClick={(event) => handlePasswordVisibleClick(event)}
							className={clsx('icon is-right')}
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
						</span>
					</div>
					<NavLink className={styles.forgot_password} to={'/auth/reset/password'}>
						Забыли пароль?
					</NavLink>
				</div>

				<div className={styles.login_wrapper}>
					<button
						onClick={() => trySignIn()}
						className={clsx('button is-primary', styles.login)}
					>
						{signInMutation.isLoading ? <Spinner /> : 'Войти'}
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
