import { SVC } from "~/types/svc";
import { TemplateMapping } from "~/types/misc";

export async function getTemplates(): Promise<TemplateMapping[]> {
  const templates = await fetch(
    "https://api.mcbanners.com/banner/svc/constants"
  );
  const templatesJson = (await templates.json()) as SVC;
  const mapped: TemplateMapping[] = Object.entries(templatesJson.templates).map(
    ([key, value]) => ({ key, value })
  );
  return mapped;
}

export function getTemplateKey(
  source: string,
  templates: TemplateMapping[]
): string | undefined {
  return templates.find((template) => template.value === source)?.key;
}
