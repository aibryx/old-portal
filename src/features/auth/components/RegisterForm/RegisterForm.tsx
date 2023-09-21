import styles from '../LoginForm/LoginForm.module.scss';
import { clsx } from 'clsx';

export const RegisterForm = () => {
	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form}>
				<label className="label">Имя пользователя</label>
				<input
					className={clsx('input', styles.username)}
					placeholder="Введите имя пользователя"
				/>

				<label className="label">Адрес электронной почты</label>
				<input
					className={clsx('input', styles.email)}
					placeholder="Введите адрес электонной почты"
				/>

				<label className="label">Пароль</label>
				<input className={clsx('input', styles.password)} placeholder="Введите пароль" />

				<label className="label">Повторите пароль</label>
				<input
					className={clsx('input', styles.confirm_password)}
					placeholder="Повторите пароль"
				/>
			</div>
		</div>
	);
};
