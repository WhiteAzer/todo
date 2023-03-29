import styles from './TasksColumn.module.scss';
import { FC } from 'react';
import { PropSize } from '../../types/global';
import { TaskCard } from '../TaskCard/TaskCard';
import { BtnThemes, Button } from '../../components/Button/Button';
import PlusIcon from '../../assets/plus-icon.svg';
import { Link } from 'react-router-dom';
import { TaskColumns, TaskColumnsTitles } from '../../types/data';
import { useAppSelector } from '../../store/hooks/useTypedSelector';
import { selectTasks } from '../../store/slices/tasks/selectors';
import { TTasks } from '../../types/tasks';

type TProps = {
	type: TaskColumns;
};

export const TasksColumn: FC<TProps> = ({ type }) => {
	const tasks: TTasks = useAppSelector(selectTasks);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{TaskColumnsTitles[type]}</h2>
			<div className={styles.content}>
				{tasks[type].map(({ title, tags, comments, description, id }) => (
					<TaskCard
						title={title}
						tags={tags}
						isCommented={!!comments.length}
						isDescribed={!!description}
						key={id}
						className={styles.item}
					/>
				))}
				{type !== TaskColumns.DONE && (
					<Link to={`/create?target=${type}`}>
						<Button theme={BtnThemes.PRIMARY} size={PropSize.M}>
							<PlusIcon className={styles.plusIcon} />
							Добавить тикет
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
