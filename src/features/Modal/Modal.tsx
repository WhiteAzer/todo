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
		console.log('mount');
		isOpen
			? document.addEventListener('keydown', handleEnter)
			: document.removeEventListener('keydown', handleEnter);
		return () => console.log('unmount');
	}, [handleEnter, isOpen]);

	const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
		e.stopPropagation();
	};

	if (isOpen) {
		return (
			<Portal>
				<div className={styles.wrapper} onClick={closeModal}>
					<div className={styles.content} onClick={stopPropagation}>
						{children}
					</div>
				</div>
			</Portal>
		);
	}
};
