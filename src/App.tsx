import './styles/index.scss';
import './styles/index.scss';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import store from './store';

export const App = () => {
	return (
		<Provider store={store}>
			<div className={'app'}>
				<AppRouter />
			</div>
		</Provider>
	);
};
