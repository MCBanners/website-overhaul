<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";

const store = useBannerDetailsStore();
const { logoSize, logoXOffset } = storeToRefs(store);
</script>

<script lang="ts">
export default {
  name: "LogoControls",
};
</script>

<template>
  <UInput v-model="logoSize" type="number">
    <template #leading>
      <span class="text-gray-500 dark:text-gray-400 text-xs">Size</span>
    </template>
    <template #trailing>
      <span class="text-gray-500 dark:text-gray-400 text-xs">sq px</span>
    </template>
  </UInput>
  <UInput v-model="logoXOffset" type="number">
    <template #leading>
      <span class="text-gray-500 dark:text-gray-400 text-xs">Oset</span>
    </template>
    <template #trailing>
      <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
    </template>
  </UInput>
</template>
