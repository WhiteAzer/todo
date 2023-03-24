import './styles/index.scss';
import { BtnThemes, Button } from './components/Button/Button';
import { PropSize, TagColor } from './types/global';
import PlusIcon from './assets/plus-icon.svg';
import { Tag } from './features/Tag/Tag';
import { Checkbox } from './components/Checkbox/Checkbox';
import { TaskCard } from './features/TaskCard/TaskCard';
import { Input } from './components/Input/Input';
import { BaseSyntheticEvent, useState } from 'react';
import { TagsList } from './features/TagsList/TagsList';

export const App = () => {
	const [value, setValue] = useState('');

	const handleChange = (e: BaseSyntheticEvent) => setValue(e.target.value);

	return (
		<>
			{Object.values(TagColor).map(el => (
				<Tag color={el} size={PropSize.S} key={el} />
			))}
			<Checkbox label={'Text'} />
			<Checkbox />
			<TaskCard />
			<Button theme={BtnThemes.PRIMARY} size={PropSize.M}>
				<PlusIcon /> Добавить тикет
			</Button>
			<Button theme={BtnThemes.PRIMARY} size={PropSize.S}>
				Сохранить
			</Button>
			<Button theme={BtnThemes.NONE} size={PropSize.XS}>
				<PlusIcon /> Добавить комментарий
			</Button>
			<Button theme={BtnThemes.SECONDARY} size={PropSize.S}>
				Да
			</Button>
			<Button theme={BtnThemes.BORDERED} size={PropSize.XS}>
				Добавить
			</Button>
			<Input isMultiline={false} value={value} onChange={handleChange} />
			<Input isMultiline={true} value={value} onChange={handleChange} />
			<TagsList />
		</>
	);
};
