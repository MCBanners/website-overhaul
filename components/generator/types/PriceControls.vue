<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore } from '~/stores/defaults'
import { useConstantStore } from '~/stores/constants'
import FormInput from '~/components/generator/types/raw/FormInput.vue'

const defaults = useDefaultStore()
const constants = useConstantStore()

const resource = storeToRefs(defaults).resource

const { price } = resource.value!

const alignments = constants.alignments
const fonts = constants.fontFaces
</script>

<script lang="ts">
export default {
  name: 'PriceControls'
}
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <FormInput
      v-model="price.x"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="price.y"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="price.font_size"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="price.font_bold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="price.text_align"
        value-attribute="key"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="price.font_face" value-attribute="key" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
