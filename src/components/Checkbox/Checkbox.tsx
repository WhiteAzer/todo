import { FC } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/global';
import CheckboxIcon from '../../assets/checkbox.svg';
import { useToggle } from '../../hooks/useToggle';

type TProps = TPropsWithClass<{
	label?: string;
}>;

export const Checkbox: FC<TProps> = ({ label, className }) => {
	const [isChecked, toggleIsChecked] = useToggle(false);

	return (
		<div className={classNames(styles.wrapper, className)} onClick={toggleIsChecked}>
			<div className={styles.checkbox}>{isChecked && <CheckboxIcon />}</div>
			<span className={styles.label}>{label}</span>
		</div>
	);
};
