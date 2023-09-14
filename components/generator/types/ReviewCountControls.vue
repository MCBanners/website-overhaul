<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore } from '~/stores/defaults'
import { useConstantStore } from '~/stores/constants'
import FormInput from '~/components/generator/types/raw/FormInput.vue'

const defaults = useDefaultStore()
const constants = useConstantStore()

const { type } = storeToRefs(defaults)

const resource = storeToRefs(defaults).resource
const author = storeToRefs(defaults).author

const { reviews } = type.value === 'resource' ? resource.value! : author.value!

const alignments = constants.alignments
const fonts = constants.fontFaces
</script>

<script lang="ts">
export default {
  name: 'ReviewCountControls'
}
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <FormInput
      v-model="reviews.x"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="reviews.y"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="reviews.font_size"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="reviews.font_bold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="reviews.text_align"
        value-attribute="key"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="reviews.font_face" value-attribute="key" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
