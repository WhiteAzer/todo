import { FC } from 'react';
import styles from './TaskForm.module.scss';
import { Input } from '../../components/Input/Input';
import { TagsList } from '../TagsList/TagsList';
import { BtnThemes, Button } from '../../components/Button/Button';
import { PropSize } from '../../types/global';
import { useForm } from '../../hooks/useForm';

export enum TaskFormMode {
	CREATE = 'create',
	EDIT = 'edit',
}

type TProps = {
	mode: TaskFormMode;
};

export const TaskForm: FC<TProps> = ({ mode }) => {
	const title = useForm();
	const description = useForm();

	if (mode === TaskFormMode.CREATE) {
		return (
			<div className={styles.wrapper}>
				<h3 className={styles.label}>Создать тикет</h3>
				<div className={styles.content}>
					<Input
						isMultiline={false}
						placeholder={'Название'}
						className={styles.title}
						{...title}
					/>
					<Input
						isMultiline={true}
						placeholder='Описание'
						className={styles.description}
						{...description}
					/>
					<TagsList className={styles.tagsList} />
					<Button theme={BtnThemes.PRIMARY} size={PropSize.M}>
						Сохранить
					</Button>
				</div>
			</div>
		);
	} else if (mode === TaskFormMode.EDIT) {
		return (
			<div className={styles.wrapper}>
				<h3 className={styles.label}>Редактировать</h3>
				<div className={styles.content}>
					<Input
						isMultiline={false}
						placeholder={'Название'}
						className={styles.title}
						{...title}
					/>
					<Input
						isMultiline={true}
						placeholder='Описание'
						className={styles.description}
						{...description}
					/>
					<TagsList className={styles.tagsList} />
					<Button theme={BtnThemes.PRIMARY} size={PropSize.M}>
						Сохранить
					</Button>
				</div>
			</div>
		);
	}
};
