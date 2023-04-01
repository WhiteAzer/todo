import { FC, PropsWithChildren, useCallback } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalPanel } from '../ModlalPanel/ModalPanel';
import { useNavigate } from 'react-router-dom';
import { MainPageAsync } from '../../pages/MainPage/MainPage.async';
import { RoutePaths } from '../../routes/types';

type TProps = PropsWithChildren;
export const ModalPage: FC<TProps> = ({ children }) => {
	const navigate = useNavigate();
	const redirectToMain = useCallback(() => navigate(RoutePaths.MAIN), [navigate]);

	return (
		<>
			<MainPageAsync />
			<Modal isOpen={true} closeModal={redirectToMain}>
				<ModalPanel onClose={redirectToMain}>{children}</ModalPanel>
			</Modal>
		</>
	);
};
