<script setup lang="ts">
import { computed } from 'vue'
import type { ContentSummary } from './types'

const props = defineProps<{
  summary: ContentSummary
  view: 'card' | 'full'
}>()

interface ImageData {
  url?: string | null
  alt?: string | null
  caption?: string | null
}

const image = computed<ImageData>(() => (props.summary.data ?? {}) as ImageData)
</script>

<template>
  <figure class="embed embed-image">
    <img
      v-if="image.url"
      :src="image.url"
      :alt="image.alt ?? summary.name"
    >
    <figcaption>
      <a v-if="summary.url" :href="summary.url">{{ summary.name }}</a>
      <span v-else>{{ summary.name }}</span>
      <p v-if="image.caption">
        {{ image.caption }}
      </p>
    </figcaption>
  </figure>
</template>
