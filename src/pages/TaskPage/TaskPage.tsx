import styles from './TaskPage.module.scss';
import BackBtn from './../../assets/back-btn.svg';
import { Link } from 'react-router-dom';
import { TaskFormEdit } from '../../features/Common/TaskFormEdit/TaskFormEdit';
import { MoreBtn } from '../../features/Common/MoreBtn/MoreBtn';
import { TaskPopup } from '../../features/TaskPage/TaskPopup/TaskPopup';
import { PropSize } from '../../types/components';
import { AddCommentBtn } from '../../features/TaskPage/AddCommentBtn/AddCommentBtn';
import { usePopup } from './hooks/usePopup';
import { useEdit } from './hooks/useEdit';
import { useAppSelector } from '../../store/hooks/useTypedSelector';
import { selectTaskStatus } from '../../store/slices/tasks/selectors';
import { Loader } from '../../features/Common/Loader/Loader';

const TaskPage = () => {
	const { isPopupVisible, togglePopupVisible, handlePopupClick } = usePopup();
	const [canEdit, handleEdit] = useEdit();
	const status = useAppSelector(selectTaskStatus);

	if (status === 'idle' || status === 'loading') return <Loader />;

	return (
		<main className={styles.wrapper}>
			<Link to={'../'} className={styles.backLink}>
				<BackBtn />
				Вернуться к задачам
			</Link>
			<TaskFormEdit isFull={true} btnSize={PropSize.S} canEdit={canEdit}>
				<MoreBtn className={styles.moreBtn} onClick={handlePopupClick} type={'button'} />
				<TaskPopup
					isVisible={isPopupVisible}
					handleClose={togglePopupVisible}
					className={styles.popup}
					handleEdit={handleEdit}
				/>
				{canEdit && <AddCommentBtn />}
			</TaskFormEdit>
		</main>
	);
};

export default TaskPage;
