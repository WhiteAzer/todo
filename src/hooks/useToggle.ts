import { useState } from 'react';

export const useToggle = (initialState: boolean) => {
	const [state, setState] = useState(initialState);
	const toggleState = () => setState(prev => !prev);

	return [state, toggleState] as const;
};
