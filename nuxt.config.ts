// https://nuxt.com/docs/api/configuration/nuxt-config

const title = 'MCBanners - Minecraft Statistical Banners'
const description = 'We turn backend statistics into beautiful front-end images that can be displayed on forums and more.'
const imageUrl = 'https://mcbanners-overhaul.pages.dev/logo_transparent_cropped.png'

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
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: imageUrl },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ]
    }
  }
})
