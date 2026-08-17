import type { Collection } from "tinacms";

export const VignetteCollection: Collection = {

  name: "vignette",
  label: "Vignettes",
  path: "src/content/vignette",
  format: "mdx",
  ui: {
		router: ({ document }) => `/v/${document._sys.relativePath}`,
  },
  fields: [
    {
      type: "reference",
      collections: ['theme'],
      name: "theme",
      label: "Theme",   
      required: true,   
    },
    {
      name: "previewImage",
      label: "Preview Image",
      type: "image",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "altText",
      label: "Alt Text",
      type: "string",
    },
    {
      name: "pinned",
      label: "Pinned?",
      type: "boolean",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Body",
      isBody: true,
    },
  ],
}
