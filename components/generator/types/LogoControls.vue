<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore } from '~/stores/defaults'
import FormInput from '~/components/generator/types/raw/FormInput.vue'

const defaults = useDefaultStore()
const resource = storeToRefs(defaults).resource

const { logo } = resource.value!

</script>

<script lang="ts">
export default {
  name: 'LogoControls'
}
</script>

<template>
  <div class="flex">
    <FormInput
      v-model="logo.size"
      name="logoSize"
      label="Size"
      type="number"
      class="w-1/3 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="logo.x"
      name="logoXOffset"
      label="X Offset"
      type="number"
      class="w-1/3 mr-4"
      trail-text="px"
    />
  </div>
</template>
