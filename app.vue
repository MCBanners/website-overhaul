<script setup lang="ts">
import { useConstantStore } from './stores/constants'
import { useDefaultStore } from './stores/defaults'

const title = 'MCBanners - Minecraft Statistical Banners'
const description = 'We turn backend statistics into beautiful front-end images that can be displayed on forums and more.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://mcbanners-overhaul.pages.dev/logo_transparent_cropped.png',
  twitterCard: 'summary_large_image'
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
