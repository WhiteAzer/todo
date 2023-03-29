import { FC } from 'react';
import styles from './NotFoundPage.module.scss';
import classNames from 'classnames';

export const NotFoundPage: FC = () => {
	return <div className={classNames(styles.wrapper)}>404 Not Found</div>;
};
