import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import styles from './TaskForm.module.scss';
import { Input } from '../../../components/Input/Input';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { PropSize, TBtnSize } from '../../../types/components';
import { Form, Formik } from 'formik';
import { TagsList } from '../TagsList/TagsList';
import { TTagsList } from '../../../types/tasks';
import { validateTask } from '../../../utils/validateTask';

type TProps = {
	label: string;
	title?: string;
	description?: string;
	handleSubmit: ({ title, description }: { title: string; description: string }) => void;
	tags: TTagsList;
	setTags: Dispatch<SetStateAction<TTagsList>>;
	btnSize?: TBtnSize;
	canEdit?: boolean;
} & PropsWithChildren;

export const TaskForm: FC<TProps> = ({
	label,
	handleSubmit,
	tags,
	setTags,
	title = '',
	description = '',
	btnSize = PropSize.M,
	children,
	canEdit = true,
}) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.label}>{label}</h3>
			<div className={styles.content}>
				<Formik
					initialValues={{
						title,
						description,
					}}
					validate={validateTask}
					onSubmit={handleSubmit}
				>
					<Form>
						<Input
							isMultiline={false}
							placeholder={'Название'}
							className={styles.title}
							name='title'
							readOnly={!canEdit}
						/>
						<Input
							isMultiline={true}
							placeholder='Описание'
							className={styles.description}
							name='description'
							readOnly={!canEdit}
						/>
						<TagsList
							tagsList={tags}
							setTagsList={setTags}
							className={styles.tagsList}
							canEdit={canEdit}
						/>
						{children}
						{canEdit && (
							<Button
								theme={BtnThemes.PRIMARY}
								size={btnSize}
								className={styles.btn}
								type='submit'
							>
								Сохранить
							</Button>
						)}
					</Form>
				</Formik>
			</div>
		</div>
	);
};
