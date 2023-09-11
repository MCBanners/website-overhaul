<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { useConstantStore } from "~/stores/constants";
import FormInput from "~/components/generator/types/raw/FormInput.vue";

const store = useBannerDetailsStore();
const constants = useConstantStore();
const { revXOffset, revYOffset, revFontSize, revFontBold, revTextAlignment, revFontFace } =
  storeToRefs(store);

const alignments = constants.alignments;
const fonts = constants.fontFaces;
</script>

<script lang="ts">
export default {
  name: "ReviewCountControls",
};
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <FormInput
      v-model="revXOffset"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="revYOffset"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="revFontSize"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="revFontBold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="revTextAlignment"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="revFontFace" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
