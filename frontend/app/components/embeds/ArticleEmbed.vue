<script setup lang="ts">
import { computed } from 'vue'
import type { ContentSummary } from './types'

const props = defineProps<{
  summary: ContentSummary
  view: 'card' | 'full'
}>()

interface ArticleData {
  intro?: string | null
  publishedAt?: string | null
}

const article = computed<ArticleData>(() => (props.summary.data ?? {}) as ArticleData)
</script>

<template>
  <article class="embed embed-article">
    <h3>
      <a v-if="summary.url" :href="summary.url">{{ summary.name }}</a>
      <span v-else>{{ summary.name }}</span>
    </h3>
    <p v-if="article.intro">
      {{ article.intro }}
    </p>
    <p v-else>
      <em>article content #{{ summary.id }} (no intro field extracted yet)</em>
    </p>
    <small v-if="article.publishedAt">
      published {{ article.publishedAt }}
    </small>
  </article>
</template>
