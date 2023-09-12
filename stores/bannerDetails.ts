import { defineStore } from 'pinia'
import { useConstantStore } from './constants'
import { BannerSaveResponse } from '~/types/misc'

export const useBannerDetailsStore = defineStore('bannerDetails', () => {
  const bannerId = ref('0')
  const selectedTemplate = ref('Moonlight Purple')
  const bannerPlatform = ref('spigot')

  // Logo
  const logoSize = ref(80)
  const logoXOffset = ref(12)

  // Resource Name
  const rXOffset = ref(104)
  const rYOffset = ref(25)
  const rFontSize = ref(18)
  const rFontBold = ref(true)
  const rTextAlignment = ref('Left')
  const rFontFace = ref('Source Sans Pro')
  const rTextOverride = ref('')

  // Author Name
  const aXOffset = ref(104)
  const aYOffset = ref(42)
  const aFontSize = ref(14)
  const aFontBold = ref(false)
  const aTextAlignment = ref('Left')
  const aFontFace = ref('Source Sans Pro')

  // Review Count
  const revXOffset = ref(104)
  const revYOffset = ref(62)
  const revFontSize = ref(14)
  const revFontBold = ref(false)
  const revTextAlignment = ref('Left')
  const revFontFace = ref('Source Sans Pro')

  // Stars
  const starXOffset = ref(180)
  const starYOffset = ref(51)
  const starGap = ref(16)

  // Downloads
  const dXOffset = ref(104)
  const dYOffset = ref(83)
  const dFontSize = ref(14)
  const dFontBold = ref(false)
  const dTextAlignment = ref('Left')
  const dFontFace = ref('Source Sans Pro')

  // Updated Time
  const uXOffset = ref(104)
  const uYOffset = ref(62)
  const uFontSize = ref(14)
  const uFontBold = ref(false)
  const uTextAlignment = ref('Left')
  const uFontFace = ref('Source Sans Pro')

  // Price
  const pXOffset = ref(210)
  const pYOffset = ref(83)
  const pFontSize = ref(14)
  const pFontBold = ref(true)
  const pTextAlignment = ref('Left')
  const pFontFace = ref('Source Sans Pro')

  async function saveBanner (type: string): Promise<BannerSaveResponse> {
    const constants = useConstantStore()
    const data = {
      type,
      metadata: {
        resource_id: bannerId.value
      },
      settings: {
        background__template: getTemplateKey(
          selectedTemplate.value,
          constants.templates
        )!,
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
        stars__x: starXOffset.value,
        stars__y: starYOffset.value,
        stars__gap: starGap.value,
        downloads__x: dXOffset.value,
        downloads__y: dYOffset.value,
        downloads__font_size: dFontSize.value,
        downloads__font_bold: dFontBold.value,
        downloads__text_align: dTextAlignment.value,
        downloads__font_face: dFontFace.value,
        updated__x: uXOffset.value,
        updated__y: uYOffset.value,
        updated__font_size: uFontSize.value,
        updated__font_bold: uFontBold.value,
        updated__text_align: uTextAlignment.value,
        updated__font_face: uFontFace.value,
        price__x: pXOffset.value,
        price__y: pYOffset.value,
        price__font_size: pFontSize.value,
        price__font_bold: pFontBold.value,
        price__text_align: pTextAlignment.value,
        price__font_face: pFontFace.value
      }
    }

    const response = await fetch(
      'https://api.mcbanners.com/banner/saved/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    const responseJson = (await response.json()) as BannerSaveResponse

    return responseJson
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
    starXOffset,
    starYOffset,
    starGap,
    dXOffset,
    dYOffset,
    dFontSize,
    dFontBold,
    dTextAlignment,
    dFontFace,
    uXOffset,
    uYOffset,
    uFontSize,
    uFontBold,
    uTextAlignment,
    uFontFace,
    pXOffset,
    pYOffset,
    pFontSize,
    pFontBold,
    pTextAlignment,
    pFontFace
  }
})
