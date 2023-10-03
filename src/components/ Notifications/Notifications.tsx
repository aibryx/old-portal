import { NotificationItem, useNotificationStore } from '@/store/store.ts';
import { Notification } from '@/components/ Notifications/Notification/Notification.tsx';
import styles from './Notifications.module.scss';
import { useEffect } from 'react';

export const Notifications = () => {
	const notifications = useNotificationStore((state) => state.notifications);

	return (
		<div className={styles.notifications}>
			{notifications.map((notification) => (
				<NotificationWithAutoRemove
					key={notification.id}
					message={notification.message}
					id={notification.id}
				/>
			))}
		</div>
	);
};

const NotificationWithAutoRemove = ({ message, id }: NotificationItem) => {
	const removeNotification = useNotificationStore((state) => state.deleteNotification);

	useEffect(() => {
		const timer = setTimeout(() => {
			removeNotification(id);
		}, 5000);

		return () => clearTimeout(timer);
	}, [id, removeNotification]);

	return (
		<>
			<Notification message={message} />
		</>
	);
};
