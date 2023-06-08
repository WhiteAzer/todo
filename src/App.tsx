import './styles/index.scss';
import { AppRouter } from './routes/AppRouter';
import { useAppDispatch } from './store/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getAllTasks } from './store/slices/tasks/thunks';

export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllTasks());
	}, [dispatch]);

	return (
		<div className={'app'}>
			<AppRouter />
		</div>
	);
};
