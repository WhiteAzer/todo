import { FC, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TTagsList } from '../../types/tasks';
import { useAppSelector } from '../../store/hooks/useTypedSelector';
import { selectTaskById } from '../../store/slices/tasks/selectors';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { editTask } from '../../store/slices/tasks';
import { RoutePaths } from '../../routes/types';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskFormEdit: FC = () => {
	const { taskId } = useParams();
	const task = useAppSelector(state => selectTaskById(state)(taskId));

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [tags, setTags] = useState<TTagsList>(task.tags);

	const handleSubmit = useCallback(
		({ title, description }: { title: string; description: string }) => {
			dispatch(editTask({ title, description, tags, id: taskId }));

			navigate(RoutePaths.MAIN);
		},
		[tags, dispatch, navigate, taskId]
	);

	return (
		<TaskForm
			label={'Редактировать'}
			handleSubmit={handleSubmit}
			title={task.title}
			description={task.description}
			tags={tags}
			setTags={setTags}
		/>
	);
};
