import { TagColor } from './global';

export type TTags = ReadonlyArray<TagColor>;

export enum TaskColumns {
	TODO = 'todo',
	IN_PROGRESS = 'in_progress',
	DONE = 'done',
}

export const TaskColumnsTitles: Record<TaskColumns, string> = {
	[TaskColumns.TODO]: 'Todo',
	[TaskColumns.IN_PROGRESS]: 'In progress',
	[TaskColumns.DONE]: 'Done',
};
