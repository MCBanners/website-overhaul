<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import { useConstantStore } from "~/stores/constants";
import FormInput from "~/components/generator/types/raw/FormInput.vue";

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
  <div class="flex flex-row mb-4">
    <FormInput
      v-model="rXOffset"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="rYOffset"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="rFontSize"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trailText="px"
    />
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
