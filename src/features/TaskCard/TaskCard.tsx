import styles from './TaskCard.module.scss';
import { Tag } from '../Tag/Tag';
import { PropSize, TagColor, TPropsWithClass } from '../../types/global';
import { FC } from 'react';
import { ContentIndicators } from '../ContentIndicators/ContentIndicators';
import { MoreBtn } from '../MoreBtn/MoreBtn';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';
import classNames from 'classnames';
import { useModal } from '../../hooks/useModal';
import { ModalPanel } from '../ModlalPanel/ModalPanel';
import { TTagsList } from '../../types/tasks';

type TProps = TPropsWithClass<{
	title: string;
	tags: TTagsList;
	isCommented: boolean;
	isDescribed: boolean;
}>;

export const TaskCard: FC<TProps> = ({ title, tags, isCommented, isDescribed, className }) => {
	const { isModalOpen, closeModal, openModal } = useModal();

	return (
		<div className={classNames(styles.card, className)}>
			<div className={styles.topSide}>
				<h1 className={styles.title}>{title}</h1>
				<MoreBtn onClick={openModal} />
			</div>
			<div className={styles.bottomSide}>
				<div className={styles.tags}>
					{Object.keys(tags)
						.filter((el: TagColor) => tags[el])
						.map((el: TagColor) => (
							<Tag color={el} size={PropSize.XS} key={el} />
						))}
				</div>
				<ContentIndicators isCommented={isCommented} isDescribed={isDescribed} />
			</div>
			<Modal isOpen={isModalOpen} closeModal={closeModal}>
				<ModalPanel onClose={closeModal}>
					<TaskForm label={'Редактировать'} />
				</ModalPanel>
			</Modal>
		</div>
	);
};
