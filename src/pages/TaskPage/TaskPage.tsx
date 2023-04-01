import styles from './TaskPage.module.scss';
import { BtnThemes, Button } from '../../components/Button/Button';
import { PropSize } from '../../types/components';
import BackBtn from './../../assets/back-btn.svg';
import { TaskForm } from '../../features/TaskForm/TaskForm';

export const TaskPage = () => {
	return (
		<main className={styles.wrapper}>
			<Button theme={BtnThemes.NONE} size={PropSize.XS} className={styles.backBtn}>
				<BackBtn />
				Вернуться к задачам
			</Button>
			{/*<TaskForm label={'Todo'} btnSize={PropSize.S}></TaskForm>*/}
		</main>
	);
};
