import { FC, MouseEventHandler, useEffect } from 'react';
import styles from './TaskPopup.module.scss';
import CloseIcon from '../../../assets/close-icon.svg';
import { TPropsWithClass } from '../../../types/components';
import classNames from 'classnames';
import { RemoveTaskModal } from '../RemoveTaskModal/RemoveTaskModal';
import { useModal } from '../../../hooks/useModal';

type TProps = {
	isVisible: boolean;
	handleClose: () => void;
	handleEdit: () => void;
} & TPropsWithClass;

export const TaskPopup: FC<TProps> = ({ isVisible, handleClose, handleEdit, className }) => {
	const { isModalOpen, closeModal, openModal } = useModal();
	const handleRemove: MouseEventHandler<HTMLLIElement> = e => {
		e.stopPropagation();
		openModal();
	};
	useEffect(() => {
		if (isVisible) {
			window.addEventListener('click', handleClose);
		}
		return () => {
			window.removeEventListener('click', handleClose);
		};
	}, [isVisible, handleClose]);

	return (
		isVisible && (
			<div className={classNames(styles.wrapper, className)}>
				<ul className={styles.list}>
					<li className={styles.item} onClick={handleRemove}>
						Удалить
					</li>
					<li className={styles.item} onClick={handleEdit}>
						Редактировать
					</li>
				</ul>
				<CloseIcon className={styles.close} onClick={handleClose} />
				<RemoveTaskModal isOpen={isModalOpen} closeModal={closeModal} />
			</div>
		)
	);
};
