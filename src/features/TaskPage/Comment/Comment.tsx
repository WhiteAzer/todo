import styles from './Comment.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../../types/components';
import { FC } from 'react';
import CloseIcon from '../../../assets/close-icon.svg';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { removeComment } from '../../../store/slices/tasks';

type TProps = {
	author: string;
	text: string;
	id: string;
	canEdit?: boolean;
} & TPropsWithClass;

export const Comment: FC<TProps> = ({ author, text, id, canEdit = true, className }) => {
	const { taskId } = useParams();
	const dispatch = useAppDispatch();

	const handleRemove = () => {
		dispatch(removeComment({ taskId: taskId, commentId: id }));
	};

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.author}>{author}</div>
			<div className={styles.text}>{text}</div>
			{canEdit && <CloseIcon className={styles.close} onClick={handleRemove} />}
		</div>
	);
};
