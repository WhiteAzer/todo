export type TPropsWithClass<T = unknown> = T & {
	className?: string;
};

export type TPropsWithSize<S extends PropSize = PropSize, T = unknown> = T & {
	size: S;
};

export enum PropSize {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
}

export enum TagColor {
	VIOLET = 'violet',
	GREEN = 'green',
	RED = 'red',
	ORANGE = 'orange',
	BLUE = 'blue',
	LIGHT_GREEN = 'lightGreen',
	DARK_BLUE = 'darkBlue',
	YELLOW = 'yellow',
}

export type TBtnSize = Exclude<PropSize, PropSize.L>;
