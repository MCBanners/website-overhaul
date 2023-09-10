<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import FormInput from "~/components/generator/types/raw/FormInput.vue";

const store = useBannerDetailsStore();
const { logoSize, logoXOffset } = storeToRefs(store);
</script>

<script lang="ts">
export default {
  name: "LogoControls",
};
</script>

<template>
  <div class="flex">
    <FormInput
      v-model="logoSize"
      name="logoSize"
      label="Size"
      type="number"
      class="w-1/3 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="logoXOffset"
      name="logoXOffset"
      label="X Offset"
      type="number"
      class="w-1/3 mr-4"
      trailText="px"
    />
  </div>
</template>
