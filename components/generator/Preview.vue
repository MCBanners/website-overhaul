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
const templates = constants.templates;

const {
  logoSize,
  logoXOffset,
  selectedTemplate,
  bannerId,
  rXOffset,
  rYOffset,
  rFontSize,
  rFontBold,
  rTextAlignment,
  rFontFace,
  rTextOverride,
  bannerPlatform,
  aXOffset,
  aYOffset,
  aFontSize,
  aFontBold,
  aTextAlignment,
  aFontFace,
} = storeToRefs(store);

const computedImageUrl: ComputedRef<string> = computed(() => {
  return generateImageUrl(
    bannerId.value,
    bannerPlatform.value,
    getTemplateKey(selectedTemplate.value, templates)!,
    logoSize.value,
    logoXOffset.value,
    rXOffset.value,
    rYOffset.value,
    rFontSize.value,
    rFontBold.value,
    rTextAlignment.value,
    rFontFace.value,
    rTextOverride.value,
    aXOffset.value,
    aYOffset.value,
    aFontSize.value,
    aFontBold.value,
    aTextAlignment.value,
    aFontFace.value
  );
});
</script>

<template>
  <UCard class="w-1/3">
    <template #header>
      <h1 class="text-center font-bold">Preview</h1>
    </template>
    <img
      :alt="label"
      :src="computedImageUrl"
      width="300"
      height="100"
      class="rounded-lg"
    />
  </UCard>
</template>
