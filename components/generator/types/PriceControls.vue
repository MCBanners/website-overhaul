<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBannerDetailsStore } from '~/stores/bannerDetails'
import { useConstantStore } from '~/stores/constants'
import FormInput from '~/components/generator/types/raw/FormInput.vue'

const store = useBannerDetailsStore()
const constants = useConstantStore()
const { pXOffset, pYOffset, pFontSize, pFontBold, pTextAlignment, pFontFace } =
  storeToRefs(store)

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
      v-model="pXOffset"
      name="xoffset"
      label="X Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="pYOffset"
      name="yoffset"
      label="Y Offset"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <FormInput
      v-model="pFontSize"
      name="fontsize"
      label="Font Size"
      type="number"
      class="w-1/6 mr-4"
      trail-text="px"
    />
    <UFormGroup label="Bold" name="bold">
      <UToggle v-model="pFontBold" />
    </UFormGroup>
  </div>
  <div class="flex flex-row space-x-4">
    <UFormGroup label="Text Alignment" name="alignment">
      <USelect
        v-model="pTextAlignment"
        :options="alignments"
        option-attribute="value"
      />
    </UFormGroup>
    <UFormGroup label="Font Face" name="font">
      <USelect v-model="pFontFace" :options="fonts" option-attribute="value" />
    </UFormGroup>
  </div>
</template>
