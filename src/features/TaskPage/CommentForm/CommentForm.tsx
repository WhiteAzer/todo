import { FC, useCallback } from 'react';
import styles from './CommentForm.module.scss';
import { Input } from '../../../components/Input/Input';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { Form, Formik } from 'formik';
import { PropSize } from '../../../types/components';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../store/slices/tasks';
import { types } from 'sass';
import Boolean = types.Boolean;

type TProps = {
	closeModal: () => void;
};

export const CommentForm: FC<TProps> = ({ closeModal }) => {
	const { taskId } = useParams();
	const dispatch = useAppDispatch();

	const validate = (values: { author: string; text: string }) => {
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

	const handleSubmit = useCallback(
		({ author, text }: { author: string; text: string }) => {
			dispatch(addComment({ author, text, id: taskId }));
			closeModal();
		},
		[dispatch, taskId, closeModal]
	);

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.label}>Добавить комментарий</h3>
			<div className={styles.content}>
				<Formik
					initialValues={{
						author: '',
						text: '',
					}}
					validate={validate}
					onSubmit={handleSubmit}
				>
					<Form>
						<Input
							isMultiline={false}
							placeholder={'Имя'}
							className={styles.title}
							name='author'
						/>
						<Input
							isMultiline={true}
							placeholder='Комментарий'
							className={styles.description}
							name='text'
						/>
						<Button
							theme={BtnThemes.PRIMARY}
							size={PropSize.M}
							className={styles.btn}
							type='submit'
						>
							Сохранить
						</Button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};
