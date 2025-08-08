import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://ice-industrial-ai.github.io/ICE-Industrial-AI',
  base: '/ICE-Industrial-AI/',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: false,
    },
  },
});
