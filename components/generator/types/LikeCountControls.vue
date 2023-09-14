<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore } from '~/stores/defaults'
import { useConstantStore } from '~/stores/constants'
import FormInput from '~/components/generator/types/raw/FormInput.vue'

const defaults = useDefaultStore()
const constants = useConstantStore()

const author = storeToRefs(defaults).author

const { likes } = author.value!

const alignments = constants.alignments
const fonts = constants.fontFaces
</script>

<script lang="ts">
export default {
  name: 'LikeCountControls'
}
</script>

<template>
  <div class="flex flex-row mb-4 w-full">
    <FormInput
      v-model="likes.x"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="likes.y"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="likes.font_size"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="likes.font_bold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="likes.text_align"
        value-attribute="key"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="likes.font_face" value-attribute="key" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
