export const validateTask = (values: { title: string }) => {
	const errors: Partial<typeof values> = {};

	if (!values.title) {
		errors.title = 'Введите название';
	} else if (values.title.length < 5) {
		errors.title = 'Слишком короткое название';
	}

	return errors;
};
