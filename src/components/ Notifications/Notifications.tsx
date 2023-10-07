import { useEffect } from 'react';
import { NotificationItem, useNotificationStore } from '@/stores/notifications';

import { Notification } from '@/components/ Notifications/Notification';
import styles from './Notifications.module.scss';

export const Notifications = () => {
	const notifications = useNotificationStore((state) => state.notifications);
	const deleteAllNotifications = useNotificationStore((state) => state.deleteAllNotifications);

	useEffect(() => {
		return () => deleteAllNotifications();
	}, []);
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

		return () => {
			console.log('Unmount here!')
			clearTimeout(timer);
		};
	}, [id, removeNotification]);

	return (
		<>
			<Notification message={message} />
		</>
	);
};
