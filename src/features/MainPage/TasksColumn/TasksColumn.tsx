import styles from './TasksColumn.module.scss';
import { FC } from 'react';
import { PropSize } from '../../../types/components';
import { TaskCard } from '../TaskCard/TaskCard';
import { BtnThemes, Button } from '../../../components/Button/Button';
import PlusIcon from '../../../assets/plus-icon.svg';
import { Link, useSearchParams } from 'react-router-dom';
import { TaskColumns, TaskColumnsTitles, TTasks } from '../../../types/tasks';
import { useAppSelector } from '../../../store/hooks/useTypedSelector';
import { selectTasks } from '../../../store/slices/tasks/selectors';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { FiltersNames } from '../../../types/filters';

type TProps = {
	type: TaskColumns;
};

export const TasksColumn: FC<TProps> = ({ type }) => {
	const tasks: TTasks = useAppSelector(selectTasks);
	const [searchParams] = useSearchParams();

	const filters = Object.values(FiltersNames).reduce((prev: Array<FiltersNames>, el) => {
		if (searchParams.get(el) === '1') prev.push(el);
		return prev;
	}, []);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{TaskColumnsTitles[type]}</h2>
			<div className={styles.content}>
				<Droppable droppableId={type}>
					{provided => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{tasks[type]
								.filter(el =>
									filters.reduce((prev, curr) => {
										if (curr === FiltersNames.TAGS) {
											return prev && Object.values(el[curr]).some(el => el);
										}
										return prev && Boolean(el[curr].length);
									}, true)
								)
								.map(({ title, tags, comments, description, id }, index) => (
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
								))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				{type !== TaskColumns.DONE && (
					<Link to={`/create?target=${type}`}>
						<Button
							theme={BtnThemes.PRIMARY}
							size={PropSize.M}
							className={classNames({ [styles.btn]: tasks[type].length })}
						>
							<PlusIcon className={styles.plusIcon} />
							Добавить тикет
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
