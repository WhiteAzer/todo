import { FC } from 'react';
import styles from './Tag.module.scss';
import classNames from 'classnames';
import { PropSize, TagColor, TPropsWithClass, TPropsWithSize } from '../../types/components';

type TProps = {
	color: TagColor;
} & TPropsWithClass &
	TPropsWithSize<Exclude<PropSize, PropSize.L>>;

export const Tag: FC<TProps> = ({ color, size, className }) => (
	<div className={classNames(styles.tag, styles[color], styles[size], className)} />
);
