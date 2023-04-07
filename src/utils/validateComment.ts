export const validateComment = (values: { author: string; text: string }) => {
	const errors: Partial<typeof values> = {};

	if (!values.author) {
		errors.author = 'Введите имя';
	} else if (
		values.author.split(' ').length < 2 ||
		values.author.split(' ').some(el => el === '')
	) {
		errors.author = 'Введите полное имя';
	}

	if (!values.text) {
		errors.text = 'Введите комментарий';
	} else if (values.text.length < 5) {
		errors.text = 'Комментарий слишклм короткий';
	}

	return errors;
};
