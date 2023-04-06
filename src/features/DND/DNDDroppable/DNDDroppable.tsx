import { FC, PropsWithChildren } from 'react';
import { Droppable } from 'react-beautiful-dnd';

type TProps = {
	droppableId: string;
} & PropsWithChildren;

export const DNDDroppable: FC<TProps> = ({ droppableId, children }) => (
	<Droppable droppableId={droppableId}>
		{provided => (
			<div {...provided.droppableProps} ref={provided.innerRef}>
				{children}
				{provided.placeholder}
			</div>
		)}
	</Droppable>
);
