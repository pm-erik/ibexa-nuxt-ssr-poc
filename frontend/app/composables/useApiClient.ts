import createClient from 'openapi-fetch'
import type { paths } from '~/types/api'

export function useApiClient() {
  const config = useRuntimeConfig()
  const baseUrl = import.meta.server
    ? config.ibexaInternalUrl
    : config.public.ibexaPublicUrl

  return createClient<paths>({ baseUrl })
}
