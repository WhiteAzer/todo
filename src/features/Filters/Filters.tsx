import styles from './Filters.module.scss';
import classNames from 'classnames';
import { TPropsWithClass } from '../../types/global';
import { FC } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';

type TProps = TPropsWithClass;
export const Filters: FC<TProps> = ({ className }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			<Checkbox label={'Комментарий'} />
			<Checkbox label={'Описание'} />
			<Checkbox label={'Тег'} />
		</div>
	);
};
