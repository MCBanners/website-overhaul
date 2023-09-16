// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/robots', 'nuxt-simple-sitemap'],
  experimental: {
    viewTransition: true
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  site: {
    url: 'https://mcbanners-overhaul.pages.dev/'
  }
})
