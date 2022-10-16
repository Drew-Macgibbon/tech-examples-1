import { defineConfig } from 'astro/config';

// https://astro.build/config
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), sitemap(), tailwind(), prefetch(), mdx(), image(), vue()],
  output: "server",
  adapter: node({
    mode: 'standalone'
  })
});