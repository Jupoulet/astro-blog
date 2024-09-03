import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// Load dotenv only in development
if (process.env.NODE_ENV === 'development') {
    const dotenv = await import('dotenv');
    dotenv.config();
}

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