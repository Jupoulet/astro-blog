import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), react(), tailwind()],
    site: 'https://Jupoulet.github.io',
    base: '/astro-blog',
    output: 'static',
    build: {
        format: 'directory',
    }
});