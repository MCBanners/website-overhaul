import { defineStore } from "pinia";

export const useBannerDetailsStore = defineStore("bannerDetails", () => {
  const bannerId = ref(0);
  const logoSize = ref(80);
  const logoXOffset = ref(12);
  const selectedTemplate = ref("Moonlight Purple");

  return { bannerId, logoSize, logoXOffset, selectedTemplate };
});
