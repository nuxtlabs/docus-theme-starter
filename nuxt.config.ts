import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'
import theme from './theme'

// Custom resolve function to resolve theme files locally
const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

export default defineNuxtConfig({
  // Extends `@docus/base`
  extends: ['./node_modules/@docus/base'],

  /**
   * Docs theme configuration.
   * 
   * Holds every configuration that applies to this theme.
   */
  theme,

  app: {
    head: {
      title: 'Docus Theme',
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'Docus' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
    },
  },
})
