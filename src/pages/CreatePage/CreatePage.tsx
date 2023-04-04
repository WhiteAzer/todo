import { FC } from 'react';
import { ModalPage } from '../../features/Modal/ModalPage/ModalPage';
import { TaskFormCreate } from '../../features/MainPage/TaskFormCreate/TaskFormCreate';

export const CreatePage: FC = () => (
	<ModalPage>
		<TaskFormCreate />
	</ModalPage>
);
