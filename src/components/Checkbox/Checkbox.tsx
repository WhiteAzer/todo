import { FC } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/global';
import CheckboxIcon from '../../assets/checkbox.svg';
import { useToggle } from '../../hooks/useToggle';

type TProps = TPropsWithClass<{
	label?: string;
	isChecked?: boolean;
}>;

export const Checkbox: FC<TProps> = ({ label, isChecked, className }) => {
	const [check, toggleCheck] = useToggle(isChecked);

	return (
		<div className={classNames(styles.wrapper, className)} onClick={toggleCheck}>
			<div className={styles.checkbox}>{check && <CheckboxIcon />}</div>
			<span className={styles.label}>{label}</span>
		</div>
	);
};
