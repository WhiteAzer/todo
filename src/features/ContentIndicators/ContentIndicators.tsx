import { FC } from 'react';
import styles from './ContentIndicators.module.scss';
import CommentIcon from '../../assets/comment-icon.svg';
import DescriptionIcon from '../../assets/description-icon.svg';

type TProps = {
	isCommented: boolean;
	isDescribed: boolean;
};

export const ContentIndicators: FC<TProps> = ({ isCommented, isDescribed }) => {
	return (
		<div className={styles.wrapper}>
			{isCommented && <CommentIcon />}
			{isDescribed && <DescriptionIcon />}
		</div>
	);
};
