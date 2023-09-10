<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { useConstantStore } from "~/stores/constants";

const store = useBannerDetailsStore();
const constants = useConstantStore();
const {
  rXOffset,
  rYOffset,
  rFontSize,
  rFontBold,
  rTextAlignment,
  rFontFace,
  rTextOverride,
} = storeToRefs(store);

const alignments = constants.alignments;
const fonts = constants.fontFaces;
</script>

<script lang="ts">
export default {
  name: "ResourceNameControls",
};
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <UFormGroup label="X Offset" name="xoffset" class="w-1/6 mr-4">
      <UInput v-model="rXOffset" type="number">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
        </template>
      </UInput>
    </UFormGroup>
    <UFormGroup label="Y Offset" name="yoffset" class="w-1/6 mr-4">
      <UInput v-model="rYOffset" type="number">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
        </template>
      </UInput>
    </UFormGroup>
    <UFormGroup label="Font Size" name="fontsize" class="w-1/6 mr-4">
      <UInput v-model="rFontSize" type="number">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">px</span>
        </template>
      </UInput>
    </UFormGroup>
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="rFontBold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="rTextAlignment"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="rFontFace" :options="fonts" option-attribute="value" />
    </UFormGroup>
    <UFormGroup label="Text Override" name="override">
      <UInput v-model="rTextOverride" type="text" class="w-full" />
    </UFormGroup>
  </div>
</template>
