import { defineConfig } from "tinacms";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";
import { ThemeCollection } from "./collections/theme";
import { ProjectCollection } from "./collections/project";
import { SmallWorkCollection } from "./collections/smallWork";
import { VignetteCollection } from "./collections/vignette";
import { CategoryCollection } from "./collections/category";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      CategoryCollection,
      ProjectCollection,
      SmallWorkCollection,
      VignetteCollection,
      ThemeCollection,
      PageCollection,
      GlobalConfigCollection,
    ],
  },
});
