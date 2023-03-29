import { FC, useCallback } from 'react';
import { MainPageAsync } from '../MainPage/MainPage.async';
import { Modal } from '../../features/Modal/Modal';
import { ModalPanel } from '../../features/ModlalPanel/ModalPanel';
import { TaskForm } from '../../features/TaskForm/TaskForm';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../types/routes';

export const CreatePage: FC = () => {
	const navigate = useNavigate();
	const redirectToMain = useCallback(() => navigate(RoutePaths.MAIN), [navigate]);

	return (
		<>
			<MainPageAsync />
			<Modal isOpen={true} closeModal={redirectToMain}>
				<ModalPanel onClose={redirectToMain}>
					<TaskForm label={'Создать тикет'}></TaskForm>
				</ModalPanel>
			</Modal>
		</>
	);
};
