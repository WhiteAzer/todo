import { Filters } from '../../features/Filters/Filters';
import styles from './MainPage.module.scss';
import { TasksColumn } from '../../features/TasksColumn/TasksColumn';
import { TaskColumns } from '../../types/tasks';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { changePosition } from '../../store/slices/tasks';
import { useCallback } from 'react';

const MainPage = () => {
	const dispatch = useAppDispatch();
	const onDragEnd = useCallback<OnDragEndResponder>(
		({ source, destination }) => {
			if (!destination) {
				return;
			} else {
				dispatch(changePosition({ source, destination }));
			}
		},
		[dispatch]
	);

	return (
		<main className={styles.wrapper}>
			<Filters className={styles.filters} />
			<DragDropContext onDragEnd={onDragEnd}>
				<div className={styles.columns}>
					<TasksColumn type={TaskColumns.TODO} />
					<TasksColumn type={TaskColumns.IN_PROGRESS} />
					<TasksColumn type={TaskColumns.DONE} />
				</div>
			</DragDropContext>
		</main>
	);
};

export default MainPage;
