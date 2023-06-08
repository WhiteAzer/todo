import { FC, useCallback, useState } from 'react';
import { TagColor } from '../../../types/components';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TTagsList } from '../../../types/tasks';
import { TaskColumns } from '../../../types/tasks';
import { TaskForm } from '../TaskForm/TaskForm';
import { RoutePaths } from '../../../routes/types';
import { addNewTask } from '../../../store/slices/tasks/thunks';

const DefaultTags = Object.values(TagColor).reduce((obj, el) => {
	obj[el] = false;
	return obj;
}, {} as TTagsList);

const isTaskColumn = (columnName: any): columnName is TaskColumns => {
	return Object.values(TaskColumns).includes(columnName);
};

export const TaskFormCreate: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [urlSearchParams] = useSearchParams();
	const param = urlSearchParams.get('target');
	const target = isTaskColumn(param) ? param : TaskColumns.TODO;

	const [tags, setTags] = useState<TTagsList>(DefaultTags);

	const handleSubmit = useCallback(
		({ title, description }: { title: string; description: string }) => {
			dispatch(addNewTask({ target, title, description, tags }));

			navigate(RoutePaths.MAIN);
		},
		[tags, dispatch, navigate, target]
	);

	return (
		<TaskForm
			label={'Создать тикет'}
			handleSubmit={handleSubmit}
			tags={tags}
			setTags={setTags}
		/>
	);
};
