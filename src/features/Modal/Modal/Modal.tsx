import styles from './Modal.module.scss';
import { useEffect, PropsWithChildren, FC, MouseEventHandler, useCallback } from 'react';
import { Portal } from '../Portal/Portal';

type TProps = {
	isOpen: boolean;
	closeModal: () => void;
} & PropsWithChildren;

export const Modal: FC<TProps> = ({ isOpen, closeModal, children }) => {
	const handleEnter = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal();
				e.preventDefault();
			}
		},
		[closeModal]
	);

	useEffect(() => {
		isOpen
			? window.addEventListener('keydown', handleEnter)
			: window.removeEventListener('keydown', handleEnter);
	}, [handleEnter, isOpen]);

	const handleClose: MouseEventHandler<HTMLDivElement> = e => {
		if (e.target === e.currentTarget) closeModal();
	};

	if (isOpen) {
		return (
			<Portal>
				<div className={styles.wrapper} onClick={handleClose}>
					<div className={styles.content}>{children}</div>
				</div>
			</Portal>
		);
	}
};
