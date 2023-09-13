import { defineStore } from 'pinia'
import { useConstantStore } from './constants'
import { Resource } from '~/types/banner'
import { BannerSaveResponse } from '~/types/misc'

export const useDefaultStore = defineStore('defaults', () => {
  const id = ref('0')
  const platform = ref('spigot')
  const template = ref('Moonlight Purple')

  const resource = ref<Resource>()

  const getResource = async () => {
    if (resource.value) { return }
    const defaults = await fetch(
      'https://api.mcbanners.com/banner/svc/defaults/all'
    )
    const defaultsJson = await defaults.json()
    resource.value = defaultsJson.resource
  }

  function convertToQueryParameters (): string {
    const queryParams: string[] = []

    for (const [key, value] of Object.entries(resource.value!)) {
      if (typeof value === 'object') {
        for (const [subKey, subValue] of Object.entries(value)) {
          if (subKey !== 'max_chars' && subKey !== 'enable' && key !== 'background') {
            queryParams.push(`${key}__${subKey}=${subValue}`)
          } else if (key === 'background' && typeof subValue === 'string') {
            const constants = useConstantStore()
            queryParams.push(`${key}__${subKey}=${getTemplateKey(template.value, constants.templates)}`)
          }
        }
      } else {
        queryParams.push(`${key}=${value}`)
      }
    }

    return queryParams.join('&')
  }

  function generateBannerUrl (): string {
    return `https://api.mcbanners.com/banner/resource/${platform.value}/${id.value}/banner.png?${convertToQueryParameters()}`
  }

  async function save (type: string): Promise<BannerSaveResponse> {
    const constants = useConstantStore()

    const data: {
      type: string;
      metadata: {
        resource_id: string;
      };
      settings: Record<string, any>;
    } = {
      type,
      metadata: {
        resource_id: id.value
      },
      settings: {}
    }

    if (resource.value) {
      for (const [key, value] of Object.entries(resource.value)) {
        if (typeof value === 'object') {
          for (const [subKey, subValue] of Object.entries(value)) {
            if (subKey !== 'max_chars' && subKey !== 'enable' && key !== 'background') {
              data.settings[`${key}__${subKey}`] = subValue
            } else if (key === 'background' && typeof subValue === 'string') {
              data.settings[`${key}__${subKey}`] = getTemplateKey(template.value, constants.templates)
            }
          }
        } else {
          data.settings[key] = value
        }
      }
    }

    const response = await fetch(
      'https://api.mcbanners.com/banner/saved/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    const responseJson = (await response.json()) as BannerSaveResponse

    return responseJson
  }

  return {
    id,
    platform,
    template,
    resource,
    getResource,
    convertToQueryParameters,
    generateBannerUrl,
    save
  }
})
