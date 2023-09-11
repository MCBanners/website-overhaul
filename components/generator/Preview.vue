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
  revXOffset,
  revYOffset,
  revFontSize,
  revFontBold,
  revTextAlignment,
  revFontFace,
  starXOffset,
  starYOffset,
  starGap,
  dXOffset,
  dYOffset,
  dFontSize,
  dFontBold,
  dTextAlignment,
  dFontFace,
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
    aFontFace.value,
    revXOffset.value,
    revYOffset.value,
    revFontSize.value,
    revFontBold.value,
    revTextAlignment.value,
    revFontFace.value,
    starXOffset.value,
    starYOffset.value,
    starGap.value,
    dXOffset.value,
    dYOffset.value,
    dFontSize.value,
    dFontBold.value,
    dTextAlignment.value,
    dFontFace.value
  );
});
</script>

<template>
  <UCard class="w-1/3">
    <template #header>
      <h3
        class="text-base font-semibold leading-6 text-gray-900 dark:text-white text-center"
      >
        Preview
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 text-center">
        This is how your banner will look.
      </p>
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
