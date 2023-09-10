<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { useConstantStore } from "~/stores/constants";

defineProps({
  label: String,
  description: String,
});

const store = useBannerDetailsStore();
const constants = useConstantStore();
const { selectedTemplate } = storeToRefs(store);
const templates = constants.templates;
</script>

<script lang="ts">
export default {
  name: "BackgroundSection",
};
</script>

<template>
  <UCard class="ml-4">
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
    <USelect
      v-model="selectedTemplate"
      :options="templates"
      option-attribute="value"
    />
  </UCard>
</template>
