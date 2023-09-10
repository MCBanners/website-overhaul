<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import BackgroundSection from "~/components/generator/sections/BackgroundSection.vue";
import LogoSection from "~/components/generator/sections/LogoSection.vue";
import ResourceNameSection from "../sections/ResourceNameSection.vue";

const store = useBannerDetailsStore();
const { logoSize, logoXOffset, selectedTemplate, bannerId } =
  storeToRefs(store);

const configureItems = [
  {
    key: "background",
    label: "Background",
    description: "Change the background of your banner.",
  },
  {
    key: "resourceLogo",
    label: "Resource Logo",
    description: "Change the resource logo of your banner.",
  },
  {
    key: "resourceName",
    label: "Resource Name",
    description: "Change the resource name of your banner.",
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
    description: "Change the price of your banner.",
  },
];
</script>

<script lang="ts">
export default {
  name: "ConfigureStep",
};
</script>

<template>
  <UTabs
    :items="configureItems"
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
      </div>
    </template>
  </UTabs>
</template>
