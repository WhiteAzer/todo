import styles from './TagsList.module.scss';
import { Tag } from '../Tag/Tag';
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { PropSize, TagColor, TPropsWithClass } from '../../../types/components';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import ArrowIcon from '../../../assets/arrow.svg';
import { TTagsList } from '../../../types/tasks';
import { useDrop } from './hooks/useDrop';

type TProps = {
	tagsList: TTagsList;
	setTagsList: Dispatch<SetStateAction<TTagsList>>;
	canEdit?: boolean;
} & TPropsWithClass;

export const TagsList: FC<TProps> = ({ tagsList, setTagsList, canEdit = true, className }) => {
	const { isDropped, closeDropped, toggleIsDropped } = useDrop();

	const toggleTag = useCallback(
		(color: TagColor) => () => {
			if (!canEdit) return;
			setTagsList(prev => ({ ...prev, [color]: !prev[color] }));
		},
		[canEdit, setTagsList]
	);

	useEffect(() => {
		if (isDropped) {
			window.addEventListener('click', closeDropped);
		}
		return () => {
			window.removeEventListener('click', closeDropped);
		};
	}, [isDropped, closeDropped]);

	const dropList = useMemo(
		() =>
			Object.entries(tagsList).map(([color, isChecked]: [TagColor, boolean]) => (
				<div className={styles.item} key={color} onClick={toggleTag(color)}>
					<Tag color={color as TagColor} size={PropSize.M} />
					<Checkbox isChecked={isChecked} className={styles.checkbox} />
				</div>
			)),
		[tagsList, toggleTag]
	);

	return (
		<div className={classNames(styles.wrapper, className)} onClick={e => e.stopPropagation()}>
			<div className={styles.tagsList} onClick={toggleIsDropped}>
				<span>Выбрать тег</span>
				<ArrowIcon />
			</div>
			{isDropped && <div className={styles.dropList}>{dropList}</div>}
		</div>
	);
};
