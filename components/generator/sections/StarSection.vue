<script setup lang="ts">
import StarControls from '~/components/generator/types/StarControls.vue'

defineProps({
  label: String,
  description: String
})
</script>

<script lang="ts">
export default {
  name: 'StarSection'
}
</script>

<template>
  <UCard class="ml-4 h-full">
    <template #header>
      <h3
        class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        {{ label }}
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </template>
    <div class="space-y-3">
      <StarControls />
    </div>
  </UCard>
</template>
