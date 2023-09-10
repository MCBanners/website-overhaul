import { SVC } from "~/types/svc";
import { KeyValueMapping } from "~/types/misc";

export async function getConstants(): Promise<SVC> {
  const constants = await fetch(
    "https://api.mcbanners.com/banner/svc/constants"
  );
  return (await constants.json()) as SVC;
}

export async function getTemplates(): Promise<KeyValueMapping[]> {
  const constants = await getConstants();
  const mapped: KeyValueMapping[] = Object.entries(constants.templates).map(
    ([key, value]) => ({ key, value })
  );
  return mapped;
}

export async function getAlignments(): Promise<KeyValueMapping[]> {
  const constants = await getConstants();
  const mapped: KeyValueMapping[] = Object.entries(
    constants.text_alignments
  ).map(([key, value]) => ({ key, value }));
  return mapped;
}

export async function getFontFaces(): Promise<KeyValueMapping[]> {
  const constants = await getConstants();
  const mapped: KeyValueMapping[] = Object.entries(constants.fonts).map(
    ([key, value]) => ({ key, value })
  );
  return mapped;
}

export function getTemplateKey(
  source: string,
  templates: KeyValueMapping[]
): string | undefined {
  return templates.find((template) => template.value === source)?.key;
}
