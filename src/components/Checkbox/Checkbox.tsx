import { FC } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/global';
import CheckboxIcon from '../../assets/checkbox.svg';

type TProps = TPropsWithClass<{
	label?: string;
	isChecked?: boolean;
}>;

export const Checkbox: FC<TProps> = ({ label, isChecked, className }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.checkbox}>{/*check*/ isChecked && <CheckboxIcon />}</div>
			<span className={styles.label}>{label}</span>
		</div>
	);
};
