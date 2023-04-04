import styles from './TagsList.module.scss';
import { Tag } from '../Tag/Tag';
import {
	Dispatch,
	FC,
	MouseEventHandler,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';
import classNames from 'classnames';
import { PropSize, TagColor, TPropsWithClass } from '../../../types/components';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import ArrowIcon from '../../../assets/arrow.svg';
import { TTagsList } from '../../../types/tasks';

type TProps = {
	tagsList: TTagsList;
	setTagsList: Dispatch<SetStateAction<TTagsList>>;
	canEdit?: boolean;
} & TPropsWithClass;

export const TagsList: FC<TProps> = ({ tagsList, setTagsList, canEdit = true, className }) => {
	const [isDropped, setIsDropped] = useState(false);

	const toggleTag = useCallback(
		(color: TagColor) => () => {
			if (!canEdit) return;
			setTagsList(prev => ({ ...prev, [color]: !prev[color] }));
		},
		[setTagsList, canEdit]
	);

	const closeDropped: (this: Window, e: MouseEvent) => void = useCallback(
		e => {
			e.stopPropagation();
			setIsDropped(false);
		},
		[setIsDropped]
	);

	const toggleIsDropped: MouseEventHandler<HTMLDivElement> = () => {
		setIsDropped(prev => !prev);
	};

	useEffect(() => {
		if (isDropped) {
			window.addEventListener('click', closeDropped);
		}
		return () => {
			window.removeEventListener('click', closeDropped);
		};
	}, [isDropped, closeDropped]);

	return (
		<div className={classNames(styles.wrapper, className)} onClick={e => e.stopPropagation()}>
			<div className={styles.tagsList} onClick={toggleIsDropped}>
				<span>Выбрать тег</span>
				<ArrowIcon />
			</div>
			{isDropped && (
				<div className={styles.dropList}>
					{Object.entries(tagsList).map(([color, isChecked]: [TagColor, boolean]) => (
						<div className={styles.item} key={color} onClick={toggleTag(color)}>
							<Tag color={color as TagColor} size={PropSize.M} />
							<Checkbox isChecked={isChecked} className={styles.checkbox} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
