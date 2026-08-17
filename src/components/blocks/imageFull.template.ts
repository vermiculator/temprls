import type { Template } from 'tinacms';

export const ImageFullPageBlockSchema: Template = {
	name: 'imageFull',
	label: 'Image',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
		{
			type: 'object', label: 'Image', name: 'image',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		}
	],
	ui: {
		defaultItem: {
			title: 'A headline',
		},
	},
};
