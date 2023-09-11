<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import FormInput from "~/components/generator/types/raw/FormInput.vue";

const store = useBannerDetailsStore();
const { starXOffset, starYOffset, starGap } = storeToRefs(store);
</script>

<script lang="ts">
export default {
  name: "StarControls",
};
</script>

<template>
  <div class="flex">
    <FormInput
      v-model="starXOffset"
      name="starXOffset"
      label="X Offset"
      type="number"
      class="w-1/4 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="starYOffset"
      name="starYOffset"
      label="Y Offset"
      type="number"
      class="w-1/4 mr-4"
      trailText="px"
    />
    <FormInput
      v-model="starGap"
      name="starGap"
      label="Gap"
      type="number"
      class="w-1/4 mr-4"
      trailText="px"
    />
  </div>
</template>
