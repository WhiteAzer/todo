import { RoutePaths } from '../types/routes';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { CreatePage } from '../pages/CreatePage/CreatePage';
import { ReactNode } from 'react';

export const routeConfig: Record<RoutePaths, ReactNode> = {
	[RoutePaths.MAIN]: <MainPageAsync />,
	[RoutePaths.CREATE]: <CreatePage />,
	[RoutePaths.NOT_FOUND]: <NotFoundPage />,
};
