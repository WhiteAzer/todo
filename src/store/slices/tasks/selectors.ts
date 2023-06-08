import { TRootState } from '../../types';
import { TaskColumns } from '../../../types/tasks';
import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state: TRootState) => state.tasks;

export const selectTaskStatus = (state: TRootState) => state.tasks.status;

export const selectColumn = (column: TaskColumns) =>
	createSelector(selectTasks, tasks => tasks[column]);

export const selectTaskById = (id: string) =>
	createSelector(selectTasks, tasks => {
		for (const column of Object.values(TaskColumns)) {
			const task = tasks[column].find(el => el._id === id);
			if (task) return task;
		}
		return null;
	});
