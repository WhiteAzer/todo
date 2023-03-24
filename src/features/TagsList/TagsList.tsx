import styles from './TagsList.module.scss';
import { Tag } from '../Tag/Tag';
import { FC } from 'react';
import classNames from 'classnames';
import { PropSize, TagColor, TPropsWithClass } from '../../types/global';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { useToggle } from '../../hooks/useToggle';
import ArrowIcon from '../../assets/arrow.svg';

type TProps = TPropsWithClass;
export const TagsList: FC<TProps> = ({ className }) => {
	const colors = Object.values(TagColor);
	const mock = colors.map(el => ({
		color: el,
		isChecked: Math.random() > 0.5,
	}));

	const [isDropped, toggleIsDropped] = useToggle(false);

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.tagsList} onClick={toggleIsDropped}>
				<span>Выбрать тег</span>
				<ArrowIcon />
			</div>
			{isDropped && (
				<div className={styles.dropList}>
					{mock.map(el => (
						<div className={styles.item} key={el.color}>
							<Tag color={el.color} size={PropSize.M} />
							<Checkbox isChecked={el.isChecked} className={styles.checkbox} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
