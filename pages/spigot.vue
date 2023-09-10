<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBannerDetailsStore } from "~/stores/bannerDetails";
import ConfigureStep from "~/components/generator/steps/ConfigureStep.vue";

const store = useBannerDetailsStore();

const { bannerId } = storeToRefs(store);

const items = [
  {
    key: "details",
    label: "Resource Details",
    disabled: false,
    description:
      "Enter the Resource ID that you want to generate a banner for.",
  },
  {
    key: "configure",
    label: "Configure Banner",
    disabled: false,
    description:
      "Configure the banner to your liking. You can change the background, resource logo, resource name, author name, review count, stars, download count, and price of your banner.",
  },
];

const idForm = reactive({ id: "" });
const index = ref(0);

const toast = useToast();

async function onSubmit(form: any) {
  const id = form.id;
  const data = await fetch(
    `https://api.mcbanners.com/banner/resource/spigot/${id}/isValid`
  );
  const json = await data.json();
  if (json.valid) {
    bannerId.value = id;
    items[1].disabled = false;
    index.value = 1;
    items[0].disabled = true;
  } else {
    index.value = 0;
    toast.add({
      id: "fetch_failed",
      title: "Error!",
      description:
        "Failed to fetch resource. Check that the resource ID is correct.",
      timeout: 3000,
    });
  }
}
</script>
<template>
  <UTabs :items="items" class="w-1/2 mx-auto mt-12" :model-value="index">
    <template #item="{ item }">
      <UCard @submit.prevent="() => onSubmit(idForm)">
        <template #header>
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ item.label }}
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>
        <div v-if="item.key === 'details'" class="space-y-3">
          <UFormGroup label="Resource ID" name="id">
            <UInput v-model="idForm.id" />
          </UFormGroup>
        </div>
        <div v-else-if="item.key === 'configure'" class="space-y-3">
          <ConfigureStep />
        </div>
        <template #footer>
          <UButton type="submit" color="black"> Fetch </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
