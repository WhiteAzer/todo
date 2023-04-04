import styles from './MoreBtn.module.scss';
import MoreBtnIcon from '../../../assets/more-btn.svg';
import { BtnThemes, Button } from '../../../components/Button/Button';
import { PropSize, TPropsWithClass } from '../../../types/components';
import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & TPropsWithClass;

export const MoreBtn: FC<TProps> = ({ className, ...props }) => {
	return (
		<Button
			{...props}
			theme={BtnThemes.NONE}
			className={classNames(styles.btn, className)}
			size={PropSize.XS}
		>
			<MoreBtnIcon />
		</Button>
	);
};
