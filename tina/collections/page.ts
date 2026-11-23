import type { Collection } from 'tinacms';
import { HeroPageBlockSchema } from '../../src/components/blocks/hero.template';
import { CtaPageBlockSchema } from '../../src/components/blocks/cta.template';
import { CalloutPageBlockSchema } from '../../src/components/blocks/callout.template';
import { ImageTextPageBlockSchema } from '../../src/components/blocks/imagetext.template';
import { ImageImagePageBlockSchema } from '../../src/components/blocks/imageimage.template';
import { ImageFullPageBlockSchema } from '../../src/components/blocks/imageFull.template';
import { RichTextPageBlockSchema } from '../../src/components/blocks/richText.template';

export const PageCollection: Collection = {
	name: 'page',
	label: 'Pages',
	path: 'src/content/page',
	format: 'mdx',
	ui: {
		router: ({ document }) => `/${document._sys.relativePath}`,
	},
	fields: [
		{
			name: 'pageTitle',
			label: 'Title',
			type: 'string',
			isTitle: true,
			required: true,
		},
		{
			name: 'description',
			label: 'Desription',
			type: 'string',
		},
		{
			type: 'object',
			list: true,
			name: 'blocks',
			label: 'Sections',
			ui: { visualSelector: true },
			templates: [
				HeroPageBlockSchema,
				CalloutPageBlockSchema,
				CtaPageBlockSchema,
				ImageFullPageBlockSchema,
				ImageTextPageBlockSchema,
				ImageImagePageBlockSchema,
				RichTextPageBlockSchema
			],
		},
		{
		type: "rich-text",
		name: "content",
		label: "Body",
		isBody: true,
		},
	],
};
