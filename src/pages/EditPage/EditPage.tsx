import { FC } from 'react';
import { ModalPage } from '../../features/ModalPage/ModalPage';
import { TaskFormEdit } from '../../features/TaskFormEdit/TaskFormEdit';

const EditPage: FC = () => (
	<ModalPage>
		<TaskFormEdit />
	</ModalPage>
);

export default EditPage;
