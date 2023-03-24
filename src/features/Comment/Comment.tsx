import styles from './Comment.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/global';
import { FC } from 'react';
import CloseIcon from '../../assets/close-icon.svg';

type TProps = {
	author: string;
	text: string;
} & TPropsWithClass;

export const Comment: FC<TProps> = ({ author, text, className }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.author}>{author}</div>
			<div className={styles.text}>{text}</div>
			<CloseIcon className={styles.close} />
		</div>
	);
};
