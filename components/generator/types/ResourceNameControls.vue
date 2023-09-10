<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { getAlignments, getFontFaces } from "~/utils/templates";

const store = useBannerDetailsStore();
const {
  rXOffset,
  rYOffset,
  rFontSize,
  rFontBold,
  rTextAlignment,
  rFontFace,
  rTextOverride,
} = storeToRefs(store);

const alignments = await getAlignments();
const fonts = await getFontFaces();
</script>

<script lang="ts">
export default {
  name: "ResourceNameControls",
};
</script>

<template>
  <div class="flex flex-row mb-4">
    <UInput v-model="rXOffset" type="number" class="w-1/4">
      <template #leading>
        <span class="text-gray-500 dark:text-gray-400 text-xs">XOff</span>
      </template>
      <template #trailing>
        <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
      </template>
    </UInput>
    <UInput v-model="rYOffset" type="number" class="w-1/4">
      <template #leading>
        <span class="text-gray-500 dark:text-gray-400 text-xs">YOff</span>
      </template>
      <template #trailing>
        <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
      </template>
    </UInput>
    <UInput v-model="rFontSize" type="number" class="w-1/4">
      <template #leading>
        <span class="text-gray-500 dark:text-gray-400 text-xs">Size</span>
      </template>
      <template #trailing>
        <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
      </template>
    </UInput>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="rFontBold" />
    </UFormGroup>
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="rTextAlignment"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect
        v-model="rFontFace"
        :options="fonts"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Text Override" name="override">
      <UInput v-model="rTextOverride" type="text" class="w-full" />
    </UFormGroup>
  </div>
</template>
