import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TagColor } from '../../../types/global';
import { TaskColumns } from '../../../types/data';
import { TTagsList, TTask, TTasks } from '../../../types/tasks';

const DefaultTags = Object.values(TagColor).reduce((obj, el) => {
	obj[el] = false;
	return obj;
}, {} as TTagsList);

const initialState: TTasks = {
	[TaskColumns.TODO]: [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			tags: {
				...DefaultTags,
				[TagColor.BLUE]: true,
				[TagColor.DARK_BLUE]: true,
				[TagColor.LIGHT_GREEN]: true,
				[TagColor.ORANGE]: true,
				[TagColor.VIOLET]: true,
			},
			comments: [],
			description: 'description',
			id: '1id',
		},
	],
	[TaskColumns.IN_PROGRESS]: [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			tags: {
				...DefaultTags,
				[TagColor.BLUE]: true,
				[TagColor.DARK_BLUE]: true,
				[TagColor.LIGHT_GREEN]: true,
				[TagColor.ORANGE]: true,
				[TagColor.VIOLET]: true,
			},
			comments: [],
			description: 'description',
			id: '2id',
		},
	],
	[TaskColumns.DONE]: [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			tags: {
				...DefaultTags,
				[TagColor.BLUE]: true,
				[TagColor.DARK_BLUE]: true,
				[TagColor.LIGHT_GREEN]: true,
				[TagColor.ORANGE]: true,
				[TagColor.VIOLET]: true,
			},
			comments: [],
			description: 'description',
			id: '3id',
		},
	],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addNewTask(
			state,
			action: PayloadAction<Omit<TTask, 'id' | 'comments'> & { target: TaskColumns }>
		) {
			state[action.payload.target].push({
				title: action.payload.title,
				description: action.payload.description,
				tags: action.payload.tags,
				comments: [],
				id: nanoid(),
			});
		},
	},
});

export const { addNewTask } = tasksSlice.actions;

export default tasksSlice.reducer;
