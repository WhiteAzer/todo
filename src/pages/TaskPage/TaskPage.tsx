import styles from './TaskPage.module.scss';
import BackBtn from './../../assets/back-btn.svg';
import { Link } from 'react-router-dom';
import { TaskFormEdit } from '../../features/Common/TaskFormEdit/TaskFormEdit';
import { MoreBtn } from '../../features/Common/MoreBtn/MoreBtn';
import { TaskPopup } from '../../features/TaskPage/TaskPopup/TaskPopup';
import { useToggle } from '../../hooks/useToggle';
import { PropSize } from '../../types/components';
import { MouseEventHandler, useCallback, useState } from 'react';
import { AddCommentBtn } from '../../features/TaskPage/AddCommentBtn/AddCommentBtn';

export const TaskPage = () => {
	const [isPopupVisible, togglePopupVisible] = useToggle(false);
	const [canEdit, setCanEdit] = useState(false);

	const handlePopupClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		e => {
			e.stopPropagation();
			togglePopupVisible();
		},
		[togglePopupVisible]
	);

	const handleEdit = useCallback(() => {
		setCanEdit(true);
	}, []);

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
