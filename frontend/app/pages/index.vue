<script setup lang="ts">
import type { components } from '~/types/api'
import PageRenderer from '~/components/PageRenderer.vue'

type PageDto = components['schemas']['PageDto']

const client = useApiClient()

const { data: page, error } = await useAsyncData<PageDto>('home-page', async () => {
  const { data, error } = await client.GET('/api/v1/pages/{locationId}', {
    params: { path: { locationId: 72 } },
  })
  if (error) {
    throw createError({ statusCode: 502, statusMessage: 'failed to load page dto' })
  }
  return data!
})
</script>

<template>
  <main>
    <p v-if="error">error: {{ error.message }}</p>
    <PageRenderer v-else-if="page" :page="page" />
  </main>
</template>
