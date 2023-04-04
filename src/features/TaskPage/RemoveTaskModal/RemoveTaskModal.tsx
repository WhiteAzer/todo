import { FC } from 'react';
import styles from './RemoveTaskModal.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { removeTask } from '../../../store/slices/tasks';
import { Modal } from '../../Modal/Modal/Modal';
import { ModalPanel } from '../../Modal/ModlalPanel/ModalPanel';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { PropSize } from '../../../types/components';

type TProps = {
	isOpen: boolean;
	closeModal: () => void;
};

export const RemoveTaskModal: FC<TProps> = ({ isOpen, closeModal }) => {
	const navigate = useNavigate();
	const { taskId } = useParams();
	const dispatch = useAppDispatch();

	const handleRemove = () => {
		dispatch(removeTask({ id: taskId }));
		navigate('/');
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<ModalPanel className={styles.modal}>
				<p className={styles.text}>Удалить тикет?</p>
				<div className={styles.btns}>
					<Button theme={BtnThemes.SECONDARY} size={PropSize.S} onClick={handleRemove}>
						Да
					</Button>
					<Button theme={BtnThemes.SECONDARY} size={PropSize.S} onClick={closeModal}>
						Нет
					</Button>
				</div>
			</ModalPanel>
		</Modal>
	);
};
