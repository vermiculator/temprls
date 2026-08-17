import type { Collection } from "tinacms";

export const ThemeCollection: Collection = {

  name: "theme",
  label: "Themes",
  path: "src/content/theme",
  format: "mdx",
  ui: {
		router: ({ document }) => `/themes/${document._sys.relativePath}`,
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
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}
