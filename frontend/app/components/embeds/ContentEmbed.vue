<script setup lang="ts">
import { resolveEmbedComponent } from './index'
import type { ContentSummary } from './types'

defineProps<{
  summary: ContentSummary
  view?: 'card' | 'full'
}>()
</script>

<template>
  <component
    :is="resolveEmbedComponent(summary.contentTypeIdentifier)"
    :summary="summary"
    :view="view ?? 'card'"
  />
</template>
