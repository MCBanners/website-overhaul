<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import BackgroundSection from "~/components/generator/sections/BackgroundSection.vue";
import LogoSection from "~/components/generator/sections/LogoSection.vue";
import ResourceNameSection from "../sections/ResourceNameSection.vue";
import AuthorNameSection from "../sections/AuthorNameSection.vue";
import ReviewCountSection from "../sections/ReviewCountSection.vue";
import StarSection from "../sections/StarSection.vue";
import DownloadCountSection from "../sections/DownloadCountSection.vue";
import UpdatedTimeSection from "../sections/UpdatedTimeSection.vue";

const store = useBannerDetailsStore();
const { logoSize, selectedTemplate, bannerId, bannerPlatform } =
  storeToRefs(store);

const configureItems = [
  {
    key: "background",
    label: "Background",
    description: "Background Configuration",
  },
  {
    key: "resourceLogo",
    label: "Resource Logo",
    description: "Logo Configuration",
  },
  {
    key: "resourceName",
    label: "Resource Name",
    description: "Name Configuration",
  },
  {
    key: "authorName",
    label: "Author Name",
    description: "Change the author name of your banner.",
  },
  {
    key: "reviewCount",
    label: "Review Count",
    description: "Change the review count of your banner.",
  },
  {
    key: "lastUpdated",
    label: "Updated Time",
    description: "Change the last updated design of your banner.",
  },
  {
    key: "stars",
    label: "Stars",
    description: "Change the stars of your banner.",
  },
  {
    key: "downloadCount",
    label: "Download Count",
    description: "Change the download count of your banner.",
  },
  {
    key: "price",
    label: "Price",
    disabled: true,
    description: "Change the price of your banner.",
  },
];

const platformSectionConfig: Record<string, string[]> = {
  spigot: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "reviewCount",
    "stars",
    "downloadCount",
    "price",
  ],
  ore: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "reviewCount",
    "downloadCount",
  ],
  curseforge: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "lastUpdated",
    "downloadCount",
  ],
  modrinth: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "lastUpdated",
    "downloadCount",
  ],
  builtbybit: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "reviewCount",
    "stars",
    "downloadCount",
    "price",
  ],
  polymart: [
    "background",
    "resourceLogo",
    "resourceName",
    "authorName",
    "reviewCount",
    "stars",
    "downloadCount",
    "price",
  ],
};

const filteredItems = computed(() => {
  const sectionsToShow = platformSectionConfig[bannerPlatform.value] || [];
  return configureItems.filter((item) => sectionsToShow.includes(item.key));
});
</script>

<script lang="ts">
export default {
  name: "ConfigureStep",
};
</script>

<template>
  <UTabs
    :items="filteredItems"
    orientation="vertical"
    :ui="{
      wrapper: 'flex items-center gap-4',
      list: { width: 'w-48' },
    }"
  >
    <template #item="{ item }">
      <div class="flex flex-row">
        <GeneratorPreview
          :url="computedImageUrl"
          :label="item.label"
          :requestId="bannerId.value"
          :templateKey="selectedTemplate.value"
          :logo-size="logoSize"
        />
        <div v-if="item.key === 'background'" class="space-y-3">
          <BackgroundSection
            :label="item.label"
            :description="item.description"
          />
        </div>
        <div v-if="item.key === 'resourceLogo'" class="space-y-3">
          <LogoSection :label="item.label" :description="item.description" />
        </div>
        <div v-if="item.key === 'resourceName'" class="space-y-3">
          <ResourceNameSection
            :label="item.label"
            :description="item.description"
          />
        </div>
        <div v-if="item.key === 'authorName'" class="space-y-3">
          <AuthorNameSection
            :label="item.label"
            :description="item.description"
          />
        </div>
        <div v-if="item.key === 'reviewCount'" class="space-y-3">
          <ReviewCountSection
            :label="item.label"
            :description="item.description"
          />
        </div>
        <div v-if="item.key === 'stars'" class="space-y-3">
          <StarSection :label="item.label" :description="item.description" />
        </div>
        <div v-if="item.key === 'downloadCount'" class="space-y-3">
          <DownloadCountSection
            :label="item.label"
            :description="item.description"
          />
        </div>
        <div v-if="item.key === 'lastUpdated'" class="space-y-3">
          <UpdatedTimeSection
            :label="item.label"
            :description="item.description"
          />
        </div>
      </div>
    </template>
  </UTabs>
</template>
