<script setup lang="ts">
import { useDefaultStore } from '~/stores/defaults'

defineProps({
  label: String,
  description: String
})

const defaults = useDefaultStore()

const computedImageUrl: ComputedRef<string> = computed(() => {
  return defaults.generateBannerUrl()
})
</script>

<template>
  <UCard class="w-1/3">
    <template #header>
      <h3
        class="text-base font-semibold leading-6 text-gray-900 dark:text-white text-center"
      >
        Preview
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 text-center">
        This is how your banner will look.
      </p>
    </template>
    <img
      :alt="label"
      :src="computedImageUrl"
      width="300"
      height="100"
      class="rounded-lg"
    >
  </UCard>
</template>
