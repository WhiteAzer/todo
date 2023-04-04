import { FC } from 'react';
import { ModalPage } from '../../features/Modal/ModalPage/ModalPage';
import { TaskFormEdit } from '../../features/Common/TaskFormEdit/TaskFormEdit';

const EditPage: FC = () => (
	<ModalPage>
		<TaskFormEdit />
	</ModalPage>
);

export default EditPage;
