import { FC } from 'react';
import styles from './AddCommentBtn.module.scss';
import classNames from 'classnames';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { PropSize, TPropsWithClass } from '../../../types/components';
import PlusIcon from '../../../assets/plus-icon.svg';
import { AddCommentModal } from '../AddCommentModal/AddCommentModal';
import { useModal } from '../../../hooks/useModal';

type TProps = TPropsWithClass;

export const AddCommentBtn: FC<TProps> = ({ className }) => {
	const { isModalOpen, closeModal, openModal } = useModal();

	return (
		<>
			<Button
				theme={BtnThemes.NONE}
				size={PropSize.XS}
				type='button'
				className={classNames(styles.btn, className)}
				onClick={openModal}
			>
				<PlusIcon fill={'#565656'} /> Добавить комментарий
			</Button>
			<AddCommentModal isOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
};
