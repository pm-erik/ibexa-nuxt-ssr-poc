<script setup lang="ts">
import { computed } from 'vue'
import type { ContentSummary } from './types'

const props = defineProps<{
  summary: ContentSummary
  view: 'card' | 'full'
}>()

interface FileData {
  url?: string | null
  fileName?: string | null
  fileSize?: number | null
  mimeType?: string | null
}

const file = computed<FileData>(() => (props.summary.data ?? {}) as FileData)

const sizeLabel = computed(() => {
  const bytes = file.value.fileSize
  if (!bytes) return null
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
})
</script>

<template>
  <div class="embed embed-file">
    <a v-if="file.url" :href="file.url" :download="file.fileName ?? true">
      📎 {{ file.fileName ?? summary.name }}
    </a>
    <span v-else>{{ summary.name }}</span>
    <small>
      <span v-if="file.mimeType">{{ file.mimeType }}</span>
      <span v-if="sizeLabel"> · {{ sizeLabel }}</span>
    </small>
  </div>
</template>
