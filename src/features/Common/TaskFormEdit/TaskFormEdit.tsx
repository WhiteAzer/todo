import styles from './TaskFormEdit.module.scss';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TTagsList } from '../../../types/tasks';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { selectTaskById } from '../../../store/slices/tasks/selectors';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { editTask } from '../../../store/slices/tasks';
import { RoutePaths } from '../../../routes/types';
import { TaskForm } from '../TaskForm/TaskForm';
import { Comment } from '../../TaskPage/Comment/Comment';
import { TBtnSize } from '../../../types/components';

type TProps = {
	isFull?: boolean;
	btnSize?: TBtnSize;
	canEdit?: boolean;
} & PropsWithChildren;
export const TaskFormEdit: FC<TProps> = ({ isFull = false, children, btnSize, canEdit = true }) => {
	const { taskId } = useParams();
	const task = useAppSelector(selectTaskById(taskId));

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
			btnSize={btnSize}
			canEdit={canEdit}
		>
			{isFull && !!task.comments.length && (
				<div className={styles.comments}>
					{task.comments.map(({ author, text, id }) => (
						<Comment
							author={author}
							text={text}
							id={id}
							canEdit={canEdit}
							key={id}
							className={styles.comment}
						/>
					))}
				</div>
			)}
			{children}
		</TaskForm>
	);
};
