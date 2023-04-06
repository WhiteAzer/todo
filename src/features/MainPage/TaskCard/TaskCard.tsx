import styles from './TaskCard.module.scss';
import { Tag } from '../../Common/Tag/Tag';
import { PropSize, TagColor, TPropsWithClass } from '../../../types/components';
import { FC } from 'react';
import { ContentIndicators } from '../ContentIndicators/ContentIndicators';
import { MoreBtn } from '../../Common/MoreBtn/MoreBtn';
import classNames from 'classnames';
import { TTagsList } from '../../../types/tasks';
import { Link } from 'react-router-dom';
import { DNDDraggable } from '../../DND/DNDDraggable/DNDDraggable';

type TProps = TPropsWithClass<{
	title: string;
	tags: TTagsList;
	isCommented: boolean;
	isDescribed: boolean;
	id: string;
	index: number;
}>;

export const TaskCard: FC<TProps> = ({
	title,
	tags,
	isCommented,
	isDescribed,
	id,
	index,
	className,
}) => {
	return (
		<DNDDraggable draggableId={id} index={index} className={classNames(styles.card, className)}>
			<div className={styles.topSide}>
				<Link to={`/edit/${id}`}>
					<h1 className={styles.title}>{title}</h1>
				</Link>
				<Link to={`/full/${id}`} onClick={e => e.stopPropagation()}>
					<MoreBtn />
				</Link>
			</div>
			<div className={styles.bottomSide}>
				<div className={styles.tags}>
					{Object.keys(tags)
						.filter((el: TagColor) => tags[el])
						.map((el: TagColor) => (
							<Tag color={el} size={PropSize.XS} key={el} />
						))}
				</div>
				<ContentIndicators isCommented={isCommented} isDescribed={isDescribed} />
			</div>
		</DNDDraggable>
	);
};
