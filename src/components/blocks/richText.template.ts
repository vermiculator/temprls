import type { Template } from 'tinacms';

export const RichTextPageBlockSchema: Template = {
	name: 'richText',
	label: 'Rich Text',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
		{ type: 'string', label: 'Description', name: 'description' },
		{ type: 'rich-text', label: 'Body', name: 'body' }
	],
	ui: {
		defaultItem: {
			body: "Here's some text",
		},
	},
};
