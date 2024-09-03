import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), svelte()],
  vite: {
    ssr: {
      noExternal: ['beercss'],
    },
  }
});