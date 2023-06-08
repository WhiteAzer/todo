import { createSlice } from '@reduxjs/toolkit';
import { TaskColumns } from '../../../types/tasks';
import { TTask, TTasks } from '../../../types/tasks';
import {
	addComment,
	addNewTask,
	changePosition,
	editTask,
	getAllTasks,
	removeComment,
	removeTask,
} from './thunks';

type TState = {
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
} & TTasks;

const initialState: TState = {
	[TaskColumns.TODO]: [],
	[TaskColumns.IN_PROGRESS]: [],
	[TaskColumns.DONE]: [],
	status: 'idle',
	error: null,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllTasks.fulfilled, (state, action) => {
				state.status = 'succeeded';
				action.payload.forEach(
					(el: { _id: TaskColumns; data: Array<TTask> }) => (state[el._id] = el.data)
				);
			})
			.addCase(getAllTasks.pending, state => {
				state.status = 'loading';
			})
			.addCase(getAllTasks.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(changePosition.fulfilled, (state, action) => {
				state.status = 'succeeded';
				action.payload.forEach(
					(el: { _id: TaskColumns; data: Array<TTask> }) => (state[el._id] = el.data)
				);
			})
			.addCase(changePosition.pending, state => {
				state.status = 'loading';
			})
			.addCase(changePosition.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(addNewTask.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state[action.payload.target as TaskColumns].push(action.payload.task);
			})
			.addCase(addNewTask.pending, state => {
				state.status = 'loading';
			})
			.addCase(addNewTask.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(editTask.fulfilled, (state, action) => {
				state.status = 'succeeded';
				for (const column of Object.values(TaskColumns)) {
					for (let i = 0; i < state[column].length; i++) {
						if (state[column][i]._id === action.payload._id) {
							state[column][i] = action.payload;
							return;
						}
					}
				}
			})
			.addCase(editTask.pending, state => {
				state.status = 'loading';
			})
			.addCase(editTask.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(removeTask.fulfilled, (state, action) => {
				state.status = 'succeeded';
				for (const column of Object.values(TaskColumns)) {
					for (let i = 0; i < state[column].length; i++) {
						if (state[column][i]._id === action.payload._id) {
							state[column].splice(i, 1);
							return;
						}
					}
				}
			})
			.addCase(removeTask.pending, state => {
				state.status = 'loading';
			})
			.addCase(removeTask.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(addComment.fulfilled, (state, action) => {
				state.status = 'succeeded';
				for (const column of Object.values(TaskColumns)) {
					for (let i = 0; i < state[column].length; i++) {
						if (state[column][i]._id === action.payload.taskId) {
							state[column][i].comments.push(action.payload.comment);
							return;
						}
					}
				}
			})
			.addCase(addComment.pending, state => {
				state.status = 'loading';
			})
			.addCase(addComment.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});

		builder
			.addCase(removeComment.fulfilled, (state, action) => {
				state.status = 'succeeded';
				for (const column of Object.values(TaskColumns)) {
					for (let i = 0; i < state[column].length; i++) {
						if ((state[column][i]._id = action.payload.taskId)) {
							const task = state[column][i];
							task.comments = task.comments.filter(
								comment => comment._id !== action.payload._id
							);
							return;
						}
					}
				}
			})
			.addCase(removeComment.pending, state => {
				state.status = 'loading';
			})
			.addCase(removeComment.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error?.message || String(action.error);
			});
	},
});

export default tasksSlice.reducer;
