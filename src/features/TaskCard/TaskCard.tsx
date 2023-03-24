import styles from './TaskCard.module.scss';
import { Tag } from '../Tag/Tag';
import { PropSize, TagColor, TPropsWithClass } from '../../types/global';
import { FC } from 'react';
import { ContentIndicators } from '../ContentIndicators/ContentIndicators';
import { MoreBtn } from '../MoreBtn/MoreBtn';
import { Modal } from '../Modal/Modal';
import { TaskForm, TaskFormMode } from '../TaskForm/TaskForm';
import classNames from 'classnames';
import { useModal } from '../../hooks/useModal';
import { ModalPanel } from '../ModlalPanel/ModalPanel';

type TProps = TPropsWithClass<{
	title: string;
	tags: ReadonlyArray<TagColor>;
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
					{tags.map(i => (
						<Tag color={i} size={PropSize.XS} key={i} />
					))}
				</div>
				<ContentIndicators isCommented={isCommented} isDescribed={isDescribed} />
			</div>
			<Modal isOpen={isModalOpen} closeModal={closeModal}>
				<ModalPanel onClose={closeModal}>
					<TaskForm mode={TaskFormMode.EDIT} />
				</ModalPanel>
			</Modal>
		</div>
	);
};
