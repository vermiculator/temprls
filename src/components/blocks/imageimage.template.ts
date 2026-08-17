import type { Template } from 'tinacms';

export const ImageImagePageBlockSchema: Template = {
	name: 'imageImage',
	label: 'Image + Image',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
		{type: 'boolean', label: 'Swap?', name:'swap'},
		{
			type: 'object', label: 'Left Image', name: 'leftImage',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		},
		{
			type: 'object', label: 'Right Image', name: 'rightImage',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'A headline',
		},
	},
};
