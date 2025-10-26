// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://riccardodivirgilio.github.io",
  base: process.env.NODE_ENV === "production" ? "/learning-zio/" : "/",
  integrations: [
    starlight({
      title: "Lezioni di Programmazione",
      sidebar: [
        {
          label: "Lezioni",
          autogenerate: { directory: "lessons" },
        },
      ],
    }),
    mermaid(),
  ],
});
