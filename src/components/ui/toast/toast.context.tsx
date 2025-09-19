'use client';

import dynamic from 'next/dynamic';
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	IToast,
	IToastContextProps,
	ToastActions,
	ToastContent,
	ToastPosition,
	ToastType,
} from './toast.model';

const ClientToast = dynamic(
	() => import('./toast.component').then((mod) => mod.Toast),
	{
		ssr: false,
	},
);

const ToastContext = createContext<IToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const refTimers = useRef<{ id: string; timer: NodeJS.Timeout }[]>([]);
	const [toasts, setToasts] = useState<IToast[]>([]);
	const [init, setInit] = useState(false);

	useEffect(() => {
		setInit(true);
	}, []);

	const closeToast = (id: string) => {
		setToasts((prev) =>
			prev.map((t) =>
				t.id === id
					? {
							...t,
							options: {
								...(t.options || {}),
								closing: true,
							},
						}
					: t,
			),
		);
		setTimeout(() => {
			removeToast(id);
		}, 300);
	};

	const addToast = (
		content: ToastContent,
		type: ToastType = 'info',
		options: { position?: ToastPosition; actions?: ToastActions } = {
			position: 'top-right',
			actions: undefined,
		},
	) => {
		const id = Math.random().toString(36).substring(2, 9);
		setToasts((prev) => [...prev, { id, content, type, options }]);

		const timeout = setTimeout(() => {
			closeToast(id);
		}, 7000);
		refTimers.current.push({ id, timer: timeout });
	};

	const removeToast = (id: string) => {
		const timeoutIndex = refTimers.current.findIndex((item) => item.id === id);
		if (timeoutIndex) {
			clearTimeout(refTimers.current[timeoutIndex].timer);
			refTimers.current.splice(timeoutIndex, 1);
		}
		setToasts((prev) => prev.filter((t) => t.id !== id));
	};

	return (
		<ToastContext.Provider
			value={{ toasts, addToast, removeToast, closeToast }}
		>
			{children}
			{init && <ClientToast />}
		</ToastContext.Provider>
	);
};

export const useToastContext = () => {
	const context = useContext(ToastContext);
	if (!context)
		throw new Error('useToastContext must be used within ToastProvider');
	return context;
};
