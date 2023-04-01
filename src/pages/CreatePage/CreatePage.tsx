import { FC } from 'react';
import { ModalPage } from '../../features/ModalPage/ModalPage';
import { TaskFormCreate } from '../../features/TaskFormCreate/TaskFormCreate';

export const CreatePage: FC = () => (
	<ModalPage>
		<TaskFormCreate />
	</ModalPage>
);
