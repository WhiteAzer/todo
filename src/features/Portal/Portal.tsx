import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type TProps = {
	container?: Element | DocumentFragment;
} & PropsWithChildren;

export const Portal: FC<TProps> = ({ children, container = document.body }) =>
	createPortal(children, container);
