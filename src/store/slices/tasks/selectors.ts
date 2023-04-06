import { TRootState } from '../../types';
import { TaskColumns } from '../../../types/tasks';
import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state: TRootState) => state.tasks;

export const selectColumn = (column: TaskColumns) =>
	createSelector(selectTasks, tasks => tasks[column]);

export const selectTaskById = (id: string) =>
	createSelector(selectTasks, tasks => {
		for (const column in tasks) {
			const task = tasks[column as TaskColumns].find(el => el.id === id);
			if (task) return task;
		}
		return null;
	});
