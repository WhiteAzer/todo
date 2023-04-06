import { FC, PropsWithChildren } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import styles from '../../MainPage/TaskCard/TaskCard.module.scss';
import { TPropsWithClass } from '../../../types/components';

type TProps = {
	draggableId: string;
	index: number;
} & PropsWithChildren &
	TPropsWithClass;

export const DNDDraggable: FC<TProps> = ({ draggableId, index, children, className }) => (
	<Draggable draggableId={draggableId} index={index}>
		{provided => (
			<div
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				className={classNames(styles.card, className)}
			>
				{children}
			</div>
		)}
	</Draggable>
);
