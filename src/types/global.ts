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
