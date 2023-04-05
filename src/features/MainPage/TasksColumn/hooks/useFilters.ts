import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TTask } from '../../../../types/tasks';
import { FiltersNames } from '../../../../types/filters';
import { getFilters } from '../../../../utils/getFilters';

export const useFilters = (): ((el: TTask) => boolean) => {
	const [searchParams] = useSearchParams();
	const filterNames = useMemo(
		() =>
			Object.values(FiltersNames).reduce((acc, el) => {
				if (searchParams.get(el) === '1') acc.push(el);
				return acc;
			}, []),
		[searchParams]
	);

	return getFilters(filterNames);
};
