import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersLabels, FiltersNames } from '../../../../types/filters';

export const useFiltersArray = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const toggleFilter = useCallback(
		(filter: FiltersNames) => () => {
			setSearchParams(prev => {
				prev.set(filter, prev.get(filter) !== '1' ? '1' : '0');
				return prev;
			});
		},
		[setSearchParams]
	);

	return useMemo(
		() =>
			Object.values(FiltersNames).map(filter => ({
				label: FiltersLabels[filter],
				isChecked: searchParams.get(filter) === '1',
				onClick: toggleFilter(filter),
			})),
		[searchParams, toggleFilter]
	);
};
