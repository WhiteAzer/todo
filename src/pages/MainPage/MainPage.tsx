import { Filters } from '../../features/Filters/Filters';
import styles from './MainPage.module.scss';
import { TasksColumn } from '../../features/TasksColumn/TasksColumn';
import { TaskColumns } from '../../types/data';

const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Filters className={styles.filters} />
			<div className={styles.columns}>
				<TasksColumn type={TaskColumns.TODO} />
				<TasksColumn type={TaskColumns.IN_PROGRESS} />
				<TasksColumn type={TaskColumns.DONE} />
			</div>
		</main>
	);
};

export default MainPage;
