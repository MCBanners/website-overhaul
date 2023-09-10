<script setup lang="ts">
import { useConstantStore } from './stores/constants';

const constants = useConstantStore();
await constants.getConstants();
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
