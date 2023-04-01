import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import styles from './TaskForm.module.scss';
import { Input } from '../../components/Input/Input';
import { BtnThemes, Button } from '../../components/Button/Button';
import { PropSize } from '../../types/components';
import { Form, Formik } from 'formik';
import { TagsList } from '../TagsList/TagsList';
import { TTagsList } from '../../types/tasks';

type TProps = {
	label: string;
	title?: string;
	description?: string;
	handleSubmit: ({ title, description }: { title: string; description: string }) => void;
	tags: TTagsList;
	setTags: Dispatch<SetStateAction<TTagsList>>;
} & PropsWithChildren;

export const TaskForm: FC<TProps> = ({
	label,
	handleSubmit,
	tags,
	setTags,
	title = '',
	description = '',
}) => {
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
						title,
						description,
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
