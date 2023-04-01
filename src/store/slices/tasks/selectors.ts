import { TRootState } from '../../types';
import { TaskColumns } from '../../../types/tasks';

export const selectTasks = (state: TRootState) => state.tasks;

export const selectTaskById = (state: TRootState) => (id: string) => {
	for (const column in state.tasks) {
		const task = state.tasks[column as TaskColumns].find(el => el.id === id);
		if (task) return task;
	}
	return null;
};
