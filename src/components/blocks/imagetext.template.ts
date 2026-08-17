import type { Template } from 'tinacms';

export const ImageTextPageBlockSchema: Template = {
	name: 'imageText',
	label: 'Text + Image',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
		{ type: 'rich-text', label: 'Body', name: 'body' },
		{
			type: 'object', label: 'Image', name: 'image',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		},
		{ type: 'boolean', label: 'Swap?', name: 'swap' },
	],
	ui: {
		defaultItem: {
			title: 'A headline',
			body: 'body text',
		},
	},
};
