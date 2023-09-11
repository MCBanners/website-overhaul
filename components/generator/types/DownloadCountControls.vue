<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { useConstantStore } from "~/stores/constants";
import FormInput from "~/components/generator/types/raw/FormInput.vue";

const store = useBannerDetailsStore();
const constants = useConstantStore();
const { dXOffset, dYOffset, dFontSize, dFontBold, dTextAlignment, dFontFace } =
  storeToRefs(store);

const alignments = constants.alignments;
const fonts = constants.fontFaces;
</script>

<script lang="ts">
export default {
  name: "DownloadCountControls",
};
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <FormInput
      v-model="dXOffset"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="dYOffset"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="dFontSize"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="dFontBold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="dTextAlignment"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="dFontFace" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
