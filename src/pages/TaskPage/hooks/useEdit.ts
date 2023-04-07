import { useCallback, useState } from 'react';

export const useEdit = () => {
	const [canEdit, setCanEdit] = useState(false);

	const handleEdit = useCallback(() => {
		setCanEdit(true);
	}, []);

	return [canEdit, handleEdit] as const;
};
