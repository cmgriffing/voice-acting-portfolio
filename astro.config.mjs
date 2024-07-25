import { defineConfig } from "astro/config";
import toml from "astro-toml";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [toml(), tailwind()]
});