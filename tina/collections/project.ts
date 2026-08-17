import type { Collection } from "tinacms";
import { VideoFullPageBlockSchema } from '../../src/components/blocks/videoFull.template';
import { ImageTextPageBlockSchema } from '../../src/components/blocks/imagetext.template';
import { ImageImagePageBlockSchema } from '../../src/components/blocks/imageimage.template';
import { ImageFullPageBlockSchema } from '../../src/components/blocks/imageFull.template';
import { RichTextPageBlockSchema } from '../../src/components/blocks/richText.template';

export const ProjectCollection: Collection = {

  name: "project",
  label: "Projects and Practises",
  path: "src/content/project",
  format: "mdx",
  ui: {
		router: ({ document }) => `/${document._sys.relativePath}`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "previewTitle",
      label: "Preview Title",
    },
    {
      type: "reference",
      collections: ['category'],
      name: "category",
      label: "Category",
      required: true,          
    },
    {
      name: "description",
      label: "Description",
      type: "string",
    },
    {
      name: "when",
      label: "When?",
      type: "string",
    },
    {
      name: "showDate",
      label: "Date (YYYY-MM)",
      type: 'datetime',
      ui: {
        dateFormat: "YYYY-MM",
        timeFormat: undefined,
      },
    },
    {
      name: "previewImage",
      label: "Preview Image",
      type: "image",
    },
    {
      name: "bannerImage",
      label: "Banner Image",
      type: "image",
    },
    {
      name: "pinned",
      label: "Pinned?",
      type: "boolean",
    },
    {
			type: 'object',
			list: true,
			name: 'blocks',
			label: 'Sections',
			ui: { visualSelector: true },
			templates: [
				RichTextPageBlockSchema,
        ImageFullPageBlockSchema,
        VideoFullPageBlockSchema,
        ImageTextPageBlockSchema,
        ImageImagePageBlockSchema
			],
		},
    {
      type: "rich-text",
      name: "content",
      label: "Body",
      isBody: true,
    },
  ],
}
