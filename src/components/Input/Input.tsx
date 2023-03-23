import styles from './Input.module.scss';

import classNames from 'classnames';
import React, { BaseSyntheticEvent, FC, useState } from 'react';
import { TPropsWithClass } from '../../types/global';

type TProps = {
	isMultiline: boolean;
	handleChange: (e: BaseSyntheticEvent) => void;
	value: string;
} & TPropsWithClass;

export const Input: FC<TProps> = ({ isMultiline = false, handleChange, value, className }) => {
	if (isMultiline) {
		return (
			<textarea
				className={classNames(styles.input, styles.multiline, className)}
				value={value}
				onChange={handleChange}
			/>
		);
	} else {
		return (
			<input
				className={classNames(styles.input, className)}
				value={value}
				onChange={handleChange}
			/>
		);
	}
};
