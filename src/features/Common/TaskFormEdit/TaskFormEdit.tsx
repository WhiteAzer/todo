import styles from './TaskFormEdit.module.scss';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TTagsList } from '../../../types/tasks';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { selectTaskById, selectTaskStatus } from '../../../store/slices/tasks/selectors';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { RoutePaths } from '../../../routes/types';
import { TaskForm } from '../TaskForm/TaskForm';
import { Comment } from '../../TaskPage/Comment/Comment';
import { TBtnSize } from '../../../types/components';
import { editTask } from '../../../store/slices/tasks/thunks';
import { Loader } from '../Loader/Loader';

type TProps = {
	isFull?: boolean;
	btnSize?: TBtnSize;
	canEdit?: boolean;
} & PropsWithChildren;
export const TaskFormEdit: FC<TProps> = ({ isFull = false, children, btnSize, canEdit = true }) => {
	const Status = useAppSelector(selectTaskStatus);
	const { taskId } = useParams();
	const task = useAppSelector(selectTaskById(taskId));

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [tags, setTags] = useState<TTagsList>(task.tags);

	const handleSubmit = useCallback(
		({ title, description }: { title: string; description: string }) => {
			dispatch(editTask({ title, description, tags, _id: taskId }));

			navigate(RoutePaths.MAIN);
		},
		[tags, dispatch, navigate, taskId]
	);

	if (Status === 'idle') return <Loader />;

	return (
		<TaskForm
			label={'Редактировать'}
			handleSubmit={handleSubmit}
			title={task.title}
			description={task.description}
			tags={tags}
			setTags={setTags}
			btnSize={btnSize}
			canEdit={canEdit}
		>
			{isFull && !!task.comments.length && (
				<div className={styles.comments}>
					{task.comments.map(({ author, text, _id }) => (
						<Comment
							author={author}
							text={text}
							id={_id}
							canEdit={canEdit}
							key={_id}
							className={styles.comment}
						/>
					))}
				</div>
			)}
			{children}
		</TaskForm>
	);
};
