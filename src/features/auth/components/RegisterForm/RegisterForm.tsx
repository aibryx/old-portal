import styles from './RegisterForm.module.scss';
import { clsx } from 'clsx';
import { BackMark } from '@/components/Elements/BackMark/BackMark.tsx';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

export const RegisterForm = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.form_wrapper}>
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
							type="text"
							placeholder="Введите имя пользователя"
						/>
					</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Адрес электронной почты</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.email)}
							type="email"
							placeholder="Введите имя пользователя"
						/>
					</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Пароль</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.password)}
							type="password"
							placeholder="Введите пароль"
						/>
					</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Повторите пароль</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.confirm_password)}
							type="password"
							placeholder="Повтори пароль"
						/>
					</div>
				</div>

				<div className={styles.register_wrapper}>
					<button className={clsx('button is-primary', styles.register)}>
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
