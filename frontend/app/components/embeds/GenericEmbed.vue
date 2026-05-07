<script setup lang="ts">
import type { ContentSummary } from './types'

defineProps<{
  summary: ContentSummary
  view: 'card' | 'full'
}>()
</script>

<template>
  <div class="embed embed-generic">
    <a v-if="summary.url" :href="summary.url">{{ summary.name }}</a>
    <span v-else>{{ summary.name }}</span>
    <small> · {{ summary.contentTypeIdentifier }} #{{ summary.id }}</small>
  </div>
</template>
