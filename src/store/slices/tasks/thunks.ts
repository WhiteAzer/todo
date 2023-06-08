import { createAsyncThunk } from '@reduxjs/toolkit';
import { DraggableLocation } from 'react-beautiful-dnd';
import { TaskColumns, TComment, TTask } from '../../../types/tasks';

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async () => {
	return await fetch('http://localhost:4000/api/taskList/', { method: 'get' }).then(res =>
		res.json()
	);
});

export const changePosition = createAsyncThunk(
	'tasks/changePosition',
	async (arg: { source: DraggableLocation; destination: DraggableLocation }) => {
		const { source, destination } = arg;

		const body = {
			start: {
				title: source.droppableId,
				index: source.index,
			},
			end: {
				title: destination.droppableId,
				index: destination.index,
			},
		};

		return await fetch('http://localhost:4000/api/taskList/', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(body),
		}).then(res => res.json());
	}
);

export const addNewTask = createAsyncThunk(
	'tasks/addNewTask',
	async (task: Omit<TTask, '_id' | 'comments'> & { target: TaskColumns }) => {
		return await fetch('http://localhost:4000/api/task/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(task),
		}).then(res => res.json());
	}
);

export const editTask = createAsyncThunk(
	'tasks/editTask',
	async (task: Omit<TTask, 'comments'>) => {
		return await fetch('http://localhost:4000/api/task/', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(task),
		}).then(res => res.json());
	}
);

export const removeTask = createAsyncThunk('tasks/removeTask', async (id: string) => {
	return await fetch(`http://localhost:4000/api/task/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(res => res.json());
});

export const removeComment = createAsyncThunk(
	'tasks/removeComment',
	async ({ id, taskId }: { id: string; taskId: string }) => {
		return await fetch(`http://localhost:4000/api/comment/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => ({ ...res, taskId }));
	}
);

export const addComment = createAsyncThunk(
	'tasks/addComment',
	async (body: Omit<TComment, '_id'> & { taskId: string }) => {
		return await fetch('http://localhost:4000/api/comment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(body),
		}).then(res => res.json());
	}
);
