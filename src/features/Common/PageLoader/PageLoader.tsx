import { FC } from 'react';
import styles from './PageLoader.module.scss';
import classNames from 'classnames';
import { Loader } from '../Loader/Loader';

export const PageLoader: FC = () => {
	return (
		<div className={classNames(styles.wrapper)}>
			<Loader />
		</div>
	);
};
