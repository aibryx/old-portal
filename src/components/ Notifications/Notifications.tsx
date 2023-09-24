import { Notification } from '@/components/ Notifications/Notification/Notification.tsx';
import styles from './Notifications.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { deleteNotification } from '@/components/ Notifications/NotificationsSlice.ts';
import {useEffect} from "react";

export const Notifications = () => {
	const notifications = useSelector((state: RootState) => state.notifications.notifications);
	const dispatch = useDispatch();

	useEffect(() => {
		notifications.forEach((n) => {
			const timer = setTimeout(() => {
				dispatch(deleteNotification(n.id));
			}, 5000);

			return () => clearTimeout(timer);
		});
	}, [notifications, dispatch]);

	return (
		<div className={styles.notifications}>
			{notifications.map((n) => (
				<Notification message={n.message} key={n.id} />
			))}
		</div>
	);
};
