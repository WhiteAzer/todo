import { TagColor } from './components';

export type TComment = {
	author: string;
	text: string;
	id: string;
};

export type TTask = {
	title: string;
	description: string;
	tags: TTagsList;
	comments: Array<TComment>;
	id: string;
};

export type TTasks = Record<TaskColumns, ReadonlyArray<TTask>>;

export type TTagsList = Record<TagColor, boolean>;

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
