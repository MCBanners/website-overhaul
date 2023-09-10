import { defineStore } from "pinia";

export const useBannerDetailsStore = defineStore("bannerDetails", () => {
  const bannerId = ref("0");
  const selectedTemplate = ref("Moonlight Purple");
  const bannerPlatform = ref("spigot");

  // Logo
  const logoSize = ref(80);
  const logoXOffset = ref(12);

  // Resource Name
  const rXOffset = ref(104);
  const rYOffset = ref(25);
  const rFontSize = ref(18);
  const rFontBold = ref(true);
  const rTextAlignment = ref("Left");
  const rFontFace = ref("Source Sans Pro");
  const rTextOverride = ref("");

  // Author Name
  const aXOffset = ref(104);
  const aYOffset = ref(42);
  const aFontSize = ref(14);
  const aFontBold = ref(false);
  const aTextAlignment = ref("Left");
  const aFontFace = ref("Source Sans Pro");

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
    bannerPlatform,
    aXOffset,
    aYOffset,
    aFontSize,
    aFontBold,
    aTextAlignment,
    aFontFace,
  };
});
