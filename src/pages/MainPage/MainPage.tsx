import { Filters } from '../../features/MainPage/Filters/Filters';
import styles from './MainPage.module.scss';
import { TasksColumn } from '../../features/MainPage/TasksColumn/TasksColumn';
import { TaskColumns } from '../../types/tasks';
import { DNDContext } from '../../features/DND/DNDContext/DNDContext';

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Filters className={styles.filters} />
			<DNDContext>
				<div className={styles.columns}>
					{Object.values(TaskColumns).map(column => (
						<TasksColumn type={column} key={column} />
					))}
				</div>
			</DNDContext>
		</main>
	);
};

export default MainPage;
