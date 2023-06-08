import styles from './TasksColumn.module.scss';
import { FC } from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import { TaskColumns, TaskColumnsTitles } from '../../../types/tasks';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { selectColumn } from '../../../store/slices/tasks/selectors';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { useFilters } from './hooks/useFilters';
import { DNDDroppable } from '../../DND/DNDDroppable/DNDDroppable';

type TProps = {
	type: TaskColumns;
};

export const TasksColumn: FC<TProps> = ({ type }) => {
	const tasks = useAppSelector(selectColumn(type));
	const filters = useFilters();
	const currentTasks = tasks.filter(filters);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{TaskColumnsTitles[type]}</h2>
			<div className={styles.content}>
				<DNDDroppable droppableId={type}>
					{currentTasks.map(({ title, tags, comments, description, _id }, index) => (
						<TaskCard
							title={title}
							tags={tags}
							isCommented={!!comments.length}
							isDescribed={!!description}
							key={_id}
							id={_id}
							index={index}
							className={styles.item}
						/>
					))}
				</DNDDroppable>
				{type !== TaskColumns.DONE && (
					<AddTaskBtn target={type} className={currentTasks.length && styles.btn} />
				)}
			</div>
		</div>
	);
};
