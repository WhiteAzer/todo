import { FC, Suspense } from 'react';
import { routeConfig } from './routesConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '../features/Common/PageLoader/PageLoader';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.entries(routeConfig).map(([path, element]) => (
					<Route path={path} element={element} key={path} />
				))}
			</Routes>
		</Suspense>
	);
};
