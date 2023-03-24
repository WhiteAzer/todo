import styles from './Input.module.scss';

import classNames from 'classnames';
import React, { FC, HTMLProps } from 'react';
import { TPropsWithClass } from '../../types/global';

type TProps = {
	isMultiline: boolean;
} & TPropsWithClass &
	HTMLProps<HTMLInputElement> &
	HTMLProps<HTMLTextAreaElement>;

export const Input: FC<TProps> = ({ isMultiline = false, className, ...props }) => {
	if (isMultiline) {
		return (
			<textarea
				className={classNames(styles.input, styles.multiline, className)}
				{...props}
			/>
		);
	} else {
		return <input className={classNames(styles.input, className)} {...props} />;
	}
};
