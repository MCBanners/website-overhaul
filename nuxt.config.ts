// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  experimental: {
    viewTransition: true
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://mcbanners-overhaul.pages.dev',
      siteName: 'MCBanners',
      siteDescription: 'We turn backend statistics into beautiful front-end images that can be displayed on forums and more.',
      language: 'en-US'
    }
  }
})
