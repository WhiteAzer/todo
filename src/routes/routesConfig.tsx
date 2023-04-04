import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { CreatePage } from '../pages/CreatePage/CreatePage';
import { ReactNode } from 'react';
import { RoutePaths } from './types';
import { EditPageAsync } from '../pages/EditPage/EditPage.async';
import { TaskPage } from '../pages/TaskPage/TaskPage';

export const routeConfig: Record<RoutePaths, ReactNode> = {
	[RoutePaths.MAIN]: <MainPageAsync />,
	[RoutePaths.CREATE]: <CreatePage />,
	[RoutePaths.EDIT]: <EditPageAsync />,
	[RoutePaths.FULL]: <TaskPage />,
	[RoutePaths.NOT_FOUND]: <NotFoundPage />,
};
