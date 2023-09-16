<script setup lang="ts">
import { useConstantStore } from './stores/constants'
import { useDefaultStore } from './stores/defaults'

const title = 'MCBanners - Minecraft Statistical Banners'
const description = 'We turn backend statistics into beautiful front-end images that can be displayed on forums and more.'
const imageUrl = 'https://mcbanners-overhaul.pages.dev/logo_transparent_cropped.png'

useHead({
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
})

const constants = useConstantStore()
const defaults = useDefaultStore()

await constants.getConstants()
await defaults.getDefaults()
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
