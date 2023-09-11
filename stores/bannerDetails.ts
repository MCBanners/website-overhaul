import { defineStore } from "pinia";
import { BannerSaveResponse } from "~/types/misc";

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

  // Review Count
  const revXOffset = ref(104);
  const revYOffset = ref(62);
  const revFontSize = ref(14);
  const revFontBold = ref(false);
  const revTextAlignment = ref("Left");
  const revFontFace = ref("Source Sans Pro");

  async function saveBanner(type: string): Promise<BannerSaveResponse> {
    const data = {
      type: type,
      metadata: {
        resource_id: bannerId.value,
      },
      settings: {
        background__template: selectedTemplate.value,
        logo__size: logoSize.value,
        logo__x: logoXOffset.value,
        resource_name__x: rXOffset.value,
        resource_name__y: rYOffset.value,
        resource_name__font_size: rFontSize.value,
        resource_name__font_bold: rFontBold.value,
        resource_name__text_align: rTextAlignment.value,
        resource_name__font_face: rFontFace.value,
        resource_name__display: rTextOverride.value,
        author_name__x: aXOffset.value,
        author_name__y: aYOffset.value,
        author_name__font_size: aFontSize.value,
        author_name__font_bold: aFontBold.value,
        author_name__text_align: aTextAlignment.value,
        author_name__font_face: aFontFace.value,
        reviews__x: revXOffset.value,
        reviews__y: revYOffset.value,
        reviews__font_size: revFontSize.value,
        reviews__font_bold: revFontBold.value,
        reviews__text_align: revTextAlignment.value,
        reviews__font_face: revFontFace.value,
      },
    };

    const response = await fetch(
      "https://api.mcbanners.com/banner/saved/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseJson = (await response.json()) as BannerSaveResponse;

    return responseJson;
  }

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
    saveBanner,
    revXOffset,
    revYOffset,
    revFontSize,
    revFontBold,
    revTextAlignment,
    revFontFace,
  };
});
