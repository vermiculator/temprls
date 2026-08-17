import type { Collection } from "tinacms";

export const CategoryCollection: Collection = {

  name: "category",
  label: "Categories",
  path: "src/content/category",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/${document._sys.filename}`;
    },
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
      name: "currentOnly",
      label: "Current Only?",
      type: "boolean",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}
