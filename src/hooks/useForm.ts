import { BaseSyntheticEvent, useCallback, useState } from 'react';

export const useForm = (initialValue = '') => {
	const [value, setValue] = useState(initialValue);
	const onChange = useCallback(
		(e: BaseSyntheticEvent) => {
			setValue(e.target.value);
		},
		[setValue]
	);

	return { value, onChange };
};
