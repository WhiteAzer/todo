import styles from './Button.module.scss';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { PropSize, TPropsWithClass, TPropsWithSize } from '../../types/global';

export enum BtnThemes {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	NONE = 'none',
	BORDERED = 'bordered',
}

type TProps = {
	theme: BtnThemes;
} & TPropsWithClass &
	TPropsWithSize<Exclude<PropSize, PropSize.L>> &
	PropsWithChildren;

export const Button: FC<TProps> = ({ theme, size, children, className, ...props }) => {
	return (
		<button
			className={classNames(styles.btn, styles[size], styles[theme], className)}
			{...props}
		>
			{children}
		</button>
	);
};
