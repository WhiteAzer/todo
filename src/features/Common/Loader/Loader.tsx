import { FC } from 'react';
import './Loader.scss';
import classNames from 'classnames';

interface PageLoaderProps {
	className?: string;
}

export const Loader: FC<PageLoaderProps> = ({ className }) => {
	return (
		<div className={classNames('lds-ripple', className)}>
			<div></div>
			<div></div>
		</div>
	);
};
