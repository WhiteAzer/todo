import styles from './TasksColumn.module.scss';
import { FC } from 'react';
import { PropSize, TagColor } from '../../types/global';
import { TaskCard } from '../TaskCard/TaskCard';
import { BtnThemes, Button } from '../../components/Button/Button';
import PlusIcon from '../../assets/plus-icon.svg';
import { Modal } from '../Modal/Modal';
import { TaskForm, TaskFormMode } from '../TaskForm/TaskForm';
import { useModal } from '../../hooks/useModal';
import { ModalPanel } from '../ModlalPanel/ModalPanel';

const mock = [
	{
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		tags: [
			TagColor.BLUE,
			TagColor.DARK_BLUE,
			TagColor.LIGHT_GREEN,
			TagColor.ORANGE,
			TagColor.VIOLET,
		],
		isCommented: true,
		isDescribed: true,
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		tags: [
			TagColor.BLUE,
			TagColor.DARK_BLUE,
			TagColor.LIGHT_GREEN,
			TagColor.ORANGE,
			TagColor.VIOLET,
		],
		isCommented: true,
		isDescribed: true,
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		tags: [
			TagColor.BLUE,
			TagColor.DARK_BLUE,
			TagColor.LIGHT_GREEN,
			TagColor.ORANGE,
			TagColor.VIOLET,
		],
		isCommented: true,
		isDescribed: true,
	},
];

type TProps = {
	title: 'Todo' | 'In progress' | 'Done';
};

export const TasksColumn: FC<TProps> = ({ title }) => {
	const { isModalOpen, closeModal, openModal } = useModal();

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>
				{mock.map((el, i) => (
					<TaskCard {...el} key={i} className={styles.item} />
				))}
				{title !== 'Done' && (
					<Button theme={BtnThemes.PRIMARY} size={PropSize.M} onClick={openModal}>
						<PlusIcon className={styles.plusIcon} />
						Добавить тикет
					</Button>
				)}
			</div>
			<Modal isOpen={isModalOpen} closeModal={closeModal}>
				<ModalPanel onClose={closeModal}>
					<TaskForm mode={TaskFormMode.CREATE} />
				</ModalPanel>
			</Modal>
		</div>
	);
};
