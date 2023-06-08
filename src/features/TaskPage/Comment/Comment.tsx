import styles from './Comment.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../../types/components';
import { FC } from 'react';
import CloseIcon from '../../../assets/close-icon.svg';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { removeComment } from '../../../store/slices/tasks/thunks';

type TProps = {
	author: string;
	text: string;
	id: string;
	canEdit?: boolean;
} & TPropsWithClass;

export const Comment: FC<TProps> = ({ author, text, id, canEdit = true, className }) => {
	const dispatch = useAppDispatch();
	const taskId = useLocation().pathname.split('/').at(-1);

	const handleRemove = () => {
		dispatch(removeComment({ id, taskId }));
	};

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.author}>{author}</div>
			<div className={styles.text}>{text}</div>
			{canEdit && <CloseIcon className={styles.close} onClick={handleRemove} />}
		</div>
	);
};
