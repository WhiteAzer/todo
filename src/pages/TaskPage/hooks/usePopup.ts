import { useToggle } from '../../../hooks/useToggle';
import { MouseEventHandler, useCallback } from 'react';

export const usePopup = () => {
	const [isPopupVisible, togglePopupVisible] = useToggle(false);

	const handlePopupClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		e => {
			e.stopPropagation();
			togglePopupVisible();
		},
		[togglePopupVisible]
	);

	return { isPopupVisible, togglePopupVisible, handlePopupClick };
};
