import { FC } from 'react';
import { ModalPage } from '../../features/Modal/ModalPage/ModalPage';
import { TaskFormEdit } from '../../features/Common/TaskFormEdit/TaskFormEdit';
import { useAppSelector } from '../../store/hooks/useTypedSelector';
import { selectTaskStatus } from '../../store/slices/tasks/selectors';
import { Loader } from '../../features/Common/Loader/Loader';

const EditPage: FC = () => {
	const status = useAppSelector(selectTaskStatus);

	return (
		<ModalPage>
			{status === 'idle' || status === 'loading' ? <Loader /> : <TaskFormEdit />}
		</ModalPage>
	);
};

export default EditPage;
