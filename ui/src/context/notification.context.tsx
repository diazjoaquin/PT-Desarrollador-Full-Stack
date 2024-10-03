import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Notification } from '../types/notification.type';
import 'react-toastify/dist/ReactToastify.css';


interface NotificationContextProps {
	getNotification: (type: Notification, msg: string) => void;
}

export const NotificationContext =
	React.createContext<null | NotificationContextProps>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const getNotification = (type: Notification, msg: string) => {
		toast[type](msg, {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		});
	};
	const values = {
		getNotification,
	};

	return (
		<NotificationContext.Provider value={values}>
			<div>
				<ToastContainer />
			</div>
			{children}
		</NotificationContext.Provider>
	);
};