import styles from './TasksColumn.module.scss';
import { FC } from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import { TaskColumns, TaskColumnsTitles } from '../../../types/tasks';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { selectColumn } from '../../../store/slices/tasks/selectors';
import { Droppable } from 'react-beautiful-dnd';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { useFilters } from './hooks/useFilters';

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
				<Droppable droppableId={type}>
					{provided => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{currentTasks.map(
								({ title, tags, comments, description, id }, index) => (
									<TaskCard
										title={title}
										tags={tags}
										isCommented={!!comments.length}
										isDescribed={!!description}
										key={id}
										id={id}
										index={index}
										className={styles.item}
									/>
								)
							)}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				{type !== TaskColumns.DONE && (
					<AddTaskBtn target={type} className={currentTasks.length && styles.btn} />
				)}
			</div>
		</div>
	);
};
