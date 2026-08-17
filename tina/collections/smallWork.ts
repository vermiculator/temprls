import type { Collection } from "tinacms";
import { RichTextPageBlockSchema } from '../../src/components/blocks/richText.template';
import { VideoFullPageBlockSchema } from '../../src/components/blocks/videoFull.template';
import { ImageTextPageBlockSchema } from '../../src/components/blocks/imagetext.template';
import { ImageImagePageBlockSchema } from '../../src/components/blocks/imageimage.template';
import { ImageFullPageBlockSchema } from '../../src/components/blocks/imageFull.template';

export const SmallWorkCollection: Collection = {

  name: "smallWork",
  label: "Small Works",
  path: "src/content/smallWork",
  format: "mdx",
  ui: {
		router: ({ document }) => `/i/${document._sys.relativePath}`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      name: "showTitle",
      label: "Show Title?",
      type: "boolean",
    },
    {
      name: "pinnedOnEntryPage",
      label: "Pinned on entry page?",
      type: "boolean",
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
      type: "reference",
      collections: ['category'],
      name: "category",
      label: "Category",
      required: true,          
    },
    {
      type: "reference",
      collections: ['project'],
      name: "project",
      label: "Project or Practise",     
    },
    {
      type: "reference",
      collections: ['theme'],
      name: "theme",
      label: "Theme",      
    },
    {
      name: "description",
      label: "Description",
      type: "string",
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
