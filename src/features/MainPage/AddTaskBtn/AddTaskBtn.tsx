import { FC } from 'react';
import styles from './AddTaskBtn.module.scss';
import classNames from 'classnames';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { PropSize, TPropsWithClass } from '../../../types/components';
import PlusIcon from '../../../assets/plus-icon.svg';
import { Link } from 'react-router-dom';
import { TaskColumns } from '../../../types/tasks';

type TProps = {
	target: TaskColumns;
} & TPropsWithClass;

export const AddTaskBtn: FC<TProps> = ({ target, className }) => {
	return (
		<Link to={`./create?target=${target}`}>
			<Button
				theme={BtnThemes.PRIMARY}
				size={PropSize.M}
				className={classNames(styles.btn, className)}
			>
				<PlusIcon />
				Добавить тикет
			</Button>
		</Link>
	);
};
