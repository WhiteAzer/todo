import styles from './Input.module.scss';
import classNames from 'classnames';
import { FC, HTMLProps } from 'react';
import { TPropsWithClass } from '../../types/components';
import { FieldHookConfig, useField } from 'formik';

type TProps = {
	isMultiline: boolean;
} & TPropsWithClass &
	HTMLProps<HTMLInputElement> &
	HTMLProps<HTMLTextAreaElement>;

export const Input: FC<TProps> = ({ isMultiline = false, className, ...options }) => {
	const [field, meta] = useField(options as string | FieldHookConfig<any>);

	if (isMultiline) {
		return (
			<>
				{meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
				<textarea
					className={classNames(styles.input, styles.multiline, className)}
					{...field}
					{...options}
				/>
			</>
		);
	} else {
		return (
			<>
				{meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
				<input className={classNames(styles.input, className)} {...field} {...options} />
			</>
		);
	}
};
