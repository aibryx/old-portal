import styles from './LoginForm.module.scss';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import { XMark } from '../../../../components/Elements/XMark/XMark.tsx';
import { useNavigate } from 'react-router';

export const LoginForm = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form}>
				<XMark back={() => navigate(-1)} />
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src="../../../../../public/main_logo.svg" />
					</div>
					<div className={styles.title}>MilkHunters ID</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Имя пользователя</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.username)}
							placeholder="Введите имя пользователя"
						/>
					</div>
				</div>

				<div className={clsx('field', styles.field)}>
					<label className={clsx('label', styles.label)}>Пароль</label>
					<div className={clsx('control', styles.control)}>
						<input
							className={clsx('input', styles.password)}
							placeholder="Введите пароль"
						/>
					</div>
				</div>

				<div className={styles.login_wrapper}>
					<button className={clsx('button is-primary', styles.login)}>Войти</button>
				</div>

				<div className={styles.to_register}>
					<span>Нет аккаунта?</span>
					<NavLink to={'/auth/register'}>Зарегистрируйтесь</NavLink>
				</div>
			</div>
		</div>
	);
};
