// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  runtimeConfig: {
    ibexaInternalUrl: process.env.IBEXA_INTERNAL_URL || 'http://127.0.0.1',
    public: {
      ibexaPublicUrl: process.env.NUXT_PUBLIC_IBEXA_PUBLIC_URL || 'https://ibexa-nuxt-ssr-poc.ddev.site'
    }
  }
})
