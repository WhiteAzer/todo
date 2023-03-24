import { Filters } from '../../features/Filters/Filters';
import styles from './MainPage.module.scss';
import { TasksColumn } from '../../features/TasksColumn/TasksColumn';

export const MainPage = () => {
	return (
		<main className={styles.wrapper}>
			<Filters className={styles.filters} />
			<div className={styles.columns}>
				<TasksColumn title={'Todo'} />
				<TasksColumn title={'In progress'} />
				<TasksColumn title={'Done'} />
			</div>
		</main>
	);
};
