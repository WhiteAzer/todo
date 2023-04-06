import styles from './Filters.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../../types/components';
import { FC } from 'react';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import { useFiltersArray } from './hooks/useFiltersArray';

type TProps = TPropsWithClass;
export const Filters: FC<TProps> = ({ className }) => {
	const filters = useFiltersArray();

	return (
		<div className={classNames(styles.wrapper, className)}>
			{filters.map(filter => (
				<Checkbox {...filter} key={filter.label} />
			))}
		</div>
	);
};
