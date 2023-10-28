/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#buildformat
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
  integrations: [react()],
});
