import styles from './TaskCard.module.scss';
import { Tag } from '../Tag/Tag';
import { PropSize, TagColor, TPropsWithClass } from '../../types/global';
import { FC } from 'react';
import { TTags } from '../../types/data';
import MoreBtn from '../../assets/more-btn.svg';
import CommentIcon from '../../assets/comment-icon.svg';
import DescriptionIcon from '../../assets/description-icon.svg';

type TProps = TPropsWithClass<{
	id?: string;
}>;

export const TaskCard: FC<TProps> = ({ id }) => {
	const mockTitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
	const mockTags: TTags = [
		TagColor.BLUE,
		TagColor.DARK_BLUE,
		TagColor.LIGHT_GREEN,
		TagColor.ORANGE,
		TagColor.VIOLET,
	];
	const mockIsCommented = true;
	const mockIsDescribed = true;

	return (
		<div className={styles.card}>
			<div className={styles.topSide}>
				<h1 className={styles.title}>{mockTitle}</h1>
				<div className={styles.moreBtn}>
					<MoreBtn />
				</div>
			</div>
			<div className={styles.bottomSide}>
				<div className={styles.tags}>
					{mockTags.map(i => (
						<Tag color={i} size={PropSize.XS} key={i} />
					))}
				</div>
				<div className={styles.indicators}>
					{mockIsCommented && <CommentIcon />}
					{mockIsDescribed && <DescriptionIcon />}
				</div>
			</div>
		</div>
	);
};
