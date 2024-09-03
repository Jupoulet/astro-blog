import { defineConfig } from 'astro/config';
import { fetchArticles } from './src/services/notion';
import dotenv from 'dotenv';

dotenv.config();

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [mdx(), react(), tailwind()],
    async getStaticPaths() {
        const articles = await fetchArticles();
        return articles.map((article) => ({
          params: { slug: article.slug },
          props: article,
        }));
      }
});