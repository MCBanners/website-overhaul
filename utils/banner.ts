export function generateImageUrl(
  id: number,
  templateKey: string,
  logoSize: number,
  logoXOffset: number
) {
  return `https://api.mcbanners.com/banner/resource/spigot/${id}/banner.png?background__template=${templateKey}&logo__size=${logoSize}&logo__x=${logoXOffset}`;
}
