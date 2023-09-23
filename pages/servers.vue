<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore } from '~/stores/defaults'
import ConfigureStep from '~/components/generator/steps/ConfigureStep.vue'

const defaults = useDefaultStore()

const { host, port, type } = storeToRefs(defaults)

type.value = 'server'

const items = [
  {
    key: 'details',
    label: 'Server Details',
    disabled: false,
    description:
      'Enter the Server IP and Port that you want to generate a banner for.'
  },
  {
    key: 'configure',
    label: 'Configure Banner',
    disabled: false,
    description:
      'Configure the banner to your liking. You can change the background, resource logo, resource name, author name, review count, stars, download count, and price of your banner.'
  }
]

const serverForm = reactive({ host: '', port: 25565 })
const index = ref(0)

const toast = useToast()

const isOpen = ref(false)
const mnemonic = ref('')

function copyToClipboard () {
  navigator.clipboard.writeText(computedResultUrl.value)
  toast.add({
    id: 'copied',
    title: 'Copied!',
    description: 'The URL has been copied to your clipboard.',
    timeout: 3000
  })
}

async function save () {
  const saved = await defaults.save('MINECRAFT_SERVER')
  if (saved.mnemonic) {
    mnemonic.value = saved.mnemonic
    isOpen.value = true
  }
}

const computedResultUrl: ComputedRef<string> = computed(() => {
  return `https://api.mcbanners.com/banner/saved/${mnemonic.value}.png`
})

async function onSubmit (form: any) {
  const serverHost = form.host
  const serverPort = form.port
  const data = await fetch(
    `https://api.mcbanners.com/banner/server/${serverHost}/${serverPort}/isValid`
  )
  const json = await data.json()
  if (json.valid) {
    host.value = serverHost
    port.value = serverPort
    items[1].disabled = false
    index.value = 1
    items[0].disabled = true
  } else {
    index.value = 0
    toast.add({
      id: 'fetch_failed',
      title: 'Error!',
      description:
        'Failed to ping that server. Please make sure the IP and port are correct.',
      timeout: 3000
    })
  }
}
</script>
<template>
  <UTabs :items="items" class="w-5/6 2xl:w-1/2 mx-auto mt-12" :model-value="index">
    <template #item="{ item }">
      <UCard
        @submit.prevent="
          () => onSubmit(item.key === 'details' ? serverForm : serverForm)
        "
      >
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
          <UFormGroup label="Host" name="host">
            <UInput v-model="serverForm.host" />
          </UFormGroup>
          <UFormGroup label="Port" name="port">
            <UInput v-model="serverForm.port" type="number" />
          </UFormGroup>
        </div>
        <div v-else-if="item.key === 'configure'" class="space-y-3">
          <ConfigureStep />
        </div>
        <template #footer>
          <div v-if="item.key === 'details'">
            <UButton type="submit" variant="outline">
              Fetch
            </UButton>
          </div>
          <div v-else>
            <UButton
              type="submit"
              variant="outline"
              @click="() => save()"
            >
              Submit
            </UButton>
          </div>
          <UModal v-model="isOpen">
            <UCard
              :ui="{
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
              }"
            >
              <template #header>
                <h1 class="text-xl font-semibold">
                  Your banner was successfully saved!
                </h1>
              </template>
              <!-- Content -->
              <img
                :alt="`Banner for ${host.value}`"
                :src="computedResultUrl"
                width="300"
                height="100"
                class="rounded-lg mx-auto"
              >
              <UInput
                v-model="computedResultUrl"
                readonly
                class="mt-4 text-center"
              />
              <div class="flex justify-center mt-2">
                <UButton
                  variant="outline"
                  class="w-full"
                  @click="copyToClipboard"
                >
                  <p class="mx-auto">
                    Copy Banner URL
                  </p>
                </UButton>
              </div>
              <template #footer>
                <div class="flex flex-col space-y-4">
                  <UFormGroup label="Markdown" name="markdown">
                    <UInput
                      :model-value="`![Banner](${computedResultUrl})`"
                      readonly
                    />
                  </UFormGroup>
                  <UFormGroup label="BBCode" name="bbcode">
                    <UInput
                      :model-value="`[img]${computedResultUrl}[/img]`"
                      readonly
                    />
                  </UFormGroup>
                  <UFormGroup label="HTML" name="html">
                    <UInput
                      :model-value="`<img src='${computedResultUrl}' alt='Banner' />`"
                      readonly
                    />
                  </UFormGroup>
                </div>
              </template>
            </UCard>
          </UModal>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
