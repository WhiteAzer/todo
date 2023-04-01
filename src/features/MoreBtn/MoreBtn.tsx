import styles from './MoreBtn.module.scss';
import MoreBtnIcon from '../../assets/more-btn.svg';
import { BtnThemes, Button } from '../../components/Button/Button';
import { PropSize } from '../../types/components';
import { FC, HTMLAttributes } from 'react';

export const MoreBtn: FC<HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
	return (
		<Button theme={BtnThemes.NONE} size={PropSize.XS} className={styles.btn} {...props}>
			<MoreBtnIcon />
		</Button>
	);
};
