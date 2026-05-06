<script setup lang="ts">
const { data, error } = await useAsyncData('ibexa-root', () =>
  $fetch('/api/ibexa/v2/content/locations/1/2', {
    headers: { Accept: 'application/vnd.ibexa.api.Location+json' }
  })
)
</script>

<template>
  <main>
    <h1>ibexa content via nuxt SSR (nitro proxy)</h1>
    <p v-if="error">error: {{ error.message }}</p>
    <pre v-else>{{ data }}</pre>
  </main>
</template>
