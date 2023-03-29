import { TaskColumns } from './data';
import { TagColor } from './global';

export type TComment = {
	author: string;
	text: string;
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
