import styles from './Notification.module.scss';
import { clsx } from 'clsx';

type NotificationProps = {
	message: string;
};

export const Notification = ({ message }: NotificationProps) => {
	return (
		<div className={clsx('notification is-danger is-light', styles.notification)}>
			{message}
		</div>
	);
};