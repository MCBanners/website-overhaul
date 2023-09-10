import { defineStore } from "pinia";

export const useBannerDetailsStore = defineStore("bannerDetails", () => {
  const bannerId = ref(0);
  const logoSize = ref(80);
  const logoXOffset = ref(12);
  const selectedTemplate = ref("Moonlight Purple");

  const rXOffset = ref(104);
  const rYOffset = ref(25);
  const rFontSize = ref(18);
  const rFontBold = ref(true);
  const rTextAlignment = ref("Left");
  const rFontFace = ref("Source Sans Pro");
  const rTextOverride = ref("");

  return {
    bannerId,
    logoSize,
    logoXOffset,
    selectedTemplate,
    rXOffset,
    rYOffset,
    rFontSize,
    rFontBold,
    rTextAlignment,
    rFontFace,
    rTextOverride,
  };
});
