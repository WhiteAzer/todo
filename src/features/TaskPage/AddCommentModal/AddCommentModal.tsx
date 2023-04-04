import { FC } from 'react';
import { Modal } from '../../Modal/Modal/Modal';
import { ModalPanel } from '../../Modal/ModlalPanel/ModalPanel';
import { CommentForm } from '../CommentForm/CommentForm';

type TProps = {
	isOpen: boolean;
	closeModal: () => void;
};

export const AddCommentModal: FC<TProps> = ({ isOpen, closeModal }) => {
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<ModalPanel onClose={closeModal}>
				<CommentForm closeModal={closeModal} />
			</ModalPanel>
		</Modal>
	);
};
