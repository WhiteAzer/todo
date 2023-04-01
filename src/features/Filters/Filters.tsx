import styles from './Filters.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/components';
import { FC, useCallback } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { useSearchParams } from 'react-router-dom';
import { FiltersNames } from '../../types/filters';

type TProps = TPropsWithClass;
export const Filters: FC<TProps> = ({ className }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const getIsChecked = (filter: FiltersNames) =>
		searchParams.get(filter) === '1' ? true : false;

	const toggleFilter = useCallback(
		(filter: FiltersNames) => () => {
			setSearchParams(prev => {
				prev.set(filter, prev.get(filter) !== '1' ? '1' : '0');
				return prev;
			});
		},
		[setSearchParams]
	);

	return (
		<div className={classNames(styles.wrapper, className)}>
			<Checkbox
				label={'Комментарий'}
				isChecked={getIsChecked(FiltersNames.COMMENTS)}
				onClick={toggleFilter(FiltersNames.COMMENTS)}
			/>
			<Checkbox
				label={'Описание'}
				isChecked={getIsChecked(FiltersNames.DESCRIPTION)}
				onClick={toggleFilter(FiltersNames.DESCRIPTION)}
			/>
			<Checkbox
				label={'Тег'}
				isChecked={getIsChecked(FiltersNames.TAGS)}
				onClick={toggleFilter(FiltersNames.TAGS)}
			/>
		</div>
	);
};
