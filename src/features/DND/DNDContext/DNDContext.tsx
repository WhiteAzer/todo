import { FC, PropsWithChildren, useCallback } from 'react';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { changePosition } from '../../../store/slices/tasks/thunks';

export const DNDContext: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();
	const onDragEnd = useCallback<OnDragEndResponder>(
		({ source, destination }) => {
			if (!destination) {
				return;
			} else {
				dispatch(changePosition({ source, destination }));
			}
		},
		[dispatch]
	);
	return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};
