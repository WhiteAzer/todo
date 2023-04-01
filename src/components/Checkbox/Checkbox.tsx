import { FC, MouseEventHandler } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/components';
import CheckboxIcon from '../../assets/checkbox.svg';

type TProps = TPropsWithClass<{
	label?: string;
	isChecked?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}>;

export const Checkbox: FC<TProps> = ({ label, isChecked, onClick, className }) => {
	return (
		<div className={classNames(styles.wrapper, className)} onClick={onClick}>
			<div className={styles.checkbox}>{isChecked && <CheckboxIcon />}</div>
			<span className={styles.label}>{label}</span>
		</div>
	);
};
