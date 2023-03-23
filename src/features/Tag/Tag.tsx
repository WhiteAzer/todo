import { FC } from 'react';
import styles from './Tag.module.scss';
import classNames from 'classnames';
import { PropSize, TPropsWithClass, TPropsWithSize } from '../../types/global';

export enum Color {
	VIOLET = 'violet',
	GREEN = 'green',
	RED = 'red',
	ORANGE = 'orange',
	BLUE = 'blue',
	LIGHT_GREEN = 'lightGreen',
	DARK_BLUE = 'darkBlue',
	YELLOW = 'yellow',
}

type TProps = {
	color: string;
} & TPropsWithClass &
	TPropsWithSize<Exclude<PropSize, PropSize.L>>;

export const Tag: FC<TProps> = ({ color, size, className }) => (
	<div className={classNames(styles.tag, styles[color], styles[size], className)} />
);
