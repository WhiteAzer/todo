import { MouseEventHandler, useCallback, useState } from 'react';

export const useDrop = () => {
	const [isDropped, setIsDropped] = useState(false);

	const closeDropped: (this: Window, e: MouseEvent) => void = useCallback(
		e => {
			e.stopPropagation();
			setIsDropped(false);
		},
		[setIsDropped]
	);

	const toggleIsDropped: MouseEventHandler<HTMLDivElement> = useCallback(() => {
		setIsDropped(prev => !prev);
	}, []);

	return { isDropped, closeDropped, toggleIsDropped };
};
