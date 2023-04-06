export enum FiltersNames {
	COMMENTS = 'comments',
	DESCRIPTION = 'description',
	TAGS = 'tags',
}

export const FiltersLabels: Record<FiltersNames, string> = {
	[FiltersNames.COMMENTS]: 'Комментарий',
	[FiltersNames.DESCRIPTION]: 'Описание',
	[FiltersNames.TAGS]: 'Тег',
};
