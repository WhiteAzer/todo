import { FC, PropsWithChildren } from 'react';
import styles from './ModalPanel.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../../types/components';
import CloseIcon from '../../../assets/close-icon.svg';

type TProps = {
	onClose?: () => void;
} & TPropsWithClass &
	PropsWithChildren;

export const ModalPanel: FC<TProps> = ({ children, onClose, className }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{children}
			{onClose && <CloseIcon onClick={onClose} className={styles.close} />}
		</div>
	);
};
