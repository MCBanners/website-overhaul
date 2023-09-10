export function generateImageUrl(
  id: string,
  platform: string,
  templateKey: string,
  logoSize: number,
  logoXOffset: number,
  rXOffset: number,
  rYOffset: number,
  rFontSize: number,
  rFontBold: boolean,
  rTextAlignment: string,
  rFontFace: string,
  rTextOverride: string,
  aXOffset: number,
  aYOffset: number,
  aFontSize: number,
  aFontBold: boolean,
  aTextAlignment: string,
  aFontFace: string
) {
  return `https://api.mcbanners.com/banner/resource/${platform}/${id}/banner.png?background__template=${templateKey}&logo__size=${logoSize}&logo__x=${logoXOffset}&resource_name__x=${rXOffset}&resource_name__y=${rYOffset}&resource_name__font_size=${rFontSize}&resource_name__font_bold=${rFontBold}&resource_name__text_align=${rTextAlignment}&resource_name__font_face=${rFontFace}&resource_name__display=${rTextOverride}&author_name__x=${aXOffset}&author_name__y=${aYOffset}&author_name__font_size=${aFontSize}&author_name__font_bold=${aFontBold}&author_name__text_align=${aTextAlignment}&author_name__font_face=${aFontFace}`;
}
