import { TagColor } from './components';

export type TComment = {
	author: string;
	text: string;
	_id: string;
};

export type TTask = {
	title: string;
	description: string;
	tags: TTagsList;
	comments: Array<TComment>;
	_id: string;
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
