import { FiltersNames } from '../types/filters';
import { TTask } from '../types/tasks';

export const getFilters = (filters: FiltersNames[]) => {
	return (el: TTask) =>
		filters.reduce((prev, curr) => {
			if (curr === FiltersNames.TAGS) {
				return prev && Object.values(el[curr]).some(el => el);
			}
			return prev && Boolean(el[curr].length);
		}, true);
};
