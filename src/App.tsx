import './styles/index.scss';
import { Color, Tag } from './features/Tag/Tag';
import { Size } from './types/global';

export const App = () => {
	return <Tag color={Color.VIOLET} size={Size.L} />;
};
