import { FC, PropsWithChildren, useCallback, useState } from 'react';
import styles from './TaskForm.module.scss';
import { Input } from '../../components/Input/Input';
import { BtnThemes, Button } from '../../components/Button/Button';
import { PropSize, TagColor, TBtnSize } from '../../types/global';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { addNewTask } from '../../store/slices/tasks';
import { RoutePaths } from '../../types/routes';
import { TagsList } from '../TagsList/TagsList';
import { TTagsList } from '../../types/tasks';
import { TaskColumns } from '../../types/data';

type TProps = {
	label: string;
	btnSize?: TBtnSize;
} & PropsWithChildren;

const DefaultTags = Object.values(TagColor).reduce((obj, el) => {
	obj[el] = false;
	return obj;
}, {} as TTagsList);

export const TaskForm: FC<TProps> = ({ label, btnSize = PropSize.M, children }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const target = (params.get('target') as TaskColumns) || TaskColumns.TODO;

	const [tags, setTags] = useState<TTagsList>(DefaultTags);

	const handleSubmit = useCallback(
		({ title, description }: { title: string; description: string }) => {
			dispatch(addNewTask({ target, title, description, tags }));

			navigate(RoutePaths.MAIN);
		},
		[tags, dispatch, navigate, target]
	);

	const validate = (values: { title: string }) => {
		const errors: Partial<typeof values> = {};

		if (!values.title) {
			errors.title = 'Введите название';
		} else if (values.title.length < 5) {
			errors.title = 'Слишком короткое название';
		}

		return errors;
	};

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.label}>{label}</h3>
			<div className={styles.content}>
				<Formik
					initialValues={{
						title: '',
					}}
					validate={validate}
					onSubmit={handleSubmit}
				>
					<Form>
						<Input
							isMultiline={false}
							placeholder={'Название'}
							className={styles.title}
							name='title'
						/>
						<Input
							isMultiline={true}
							placeholder='Описание'
							className={styles.description}
							name='description'
						/>
						<TagsList
							tagsList={tags}
							setTagsList={setTags}
							className={styles.tagsList}
						/>
						<Button
							theme={BtnThemes.PRIMARY}
							size={btnSize}
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
