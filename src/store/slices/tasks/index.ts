import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TagColor } from '../../../types/components';
import { TaskColumns } from '../../../types/tasks';
import { TTagsList, TTask, TTasks } from '../../../types/tasks';
import { DraggableLocation } from 'react-beautiful-dnd';

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
		editTask(state, action: PayloadAction<Omit<TTask, 'comments'>>) {
			for (const columnName in state) {
				const column = state[columnName as TaskColumns];
				for (let i = 0; i < column.length; i++) {
					if (column[i].id === action.payload.id) {
						column[i].title = action.payload.title;
						column[i].description = action.payload.description;
						column[i].tags = action.payload.tags;
						return;
					}
				}
			}
		},
		changePosition(
			state,
			action: PayloadAction<{ source: DraggableLocation; destination: DraggableLocation }>
		) {
			state[action.payload.destination.droppableId as TaskColumns].splice(
				action.payload.destination.index,
				0,
				...state[action.payload.source.droppableId as TaskColumns].splice(
					action.payload.source.index,
					1
				)
			);
		},
	},
});

export const { addNewTask, editTask, changePosition } = tasksSlice.actions;

export default tasksSlice.reducer;
