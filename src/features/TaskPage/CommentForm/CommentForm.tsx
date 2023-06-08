import { FC, useCallback } from 'react';
import styles from './CommentForm.module.scss';
import { Input } from '../../../components/Input/Input';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { Form, Formik } from 'formik';
import { PropSize } from '../../../types/components';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { validateComment } from '../../../utils/validateComment';
import { addComment } from '../../../store/slices/tasks/thunks';

type TProps = {
	closeModal: () => void;
};

export const CommentForm: FC<TProps> = ({ closeModal }) => {
	const { taskId } = useParams();
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		({ author, text }: { author: string; text: string }) => {
			dispatch(addComment({ author, text, taskId: taskId }));
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
					validate={validateComment}
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
