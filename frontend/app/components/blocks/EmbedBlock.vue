<script setup lang="ts">
import type { ContentSummary } from '../embeds/types'
import ContentEmbed from "~/components/embeds/ContentEmbed.vue";

defineProps<{
  attributes: {
    contentId?: number | null
    summary?: ContentSummary | null
  }
  blockId: string
  view: string
}>()
</script>

<template>
  <article class="block block-embed">
    <header>
      <strong>embed</strong>
      <small>id {{ blockId }} · view {{ view }}</small>
    </header>
    <ContentEmbed v-if="attributes.summary" :summary="attributes.summary" view="full" />
    <p v-else-if="attributes.contentId">
      <em>content #{{ attributes.contentId }} could not be resolved</em>
    </p>
    <p v-else>
      <em>no content selected</em>
    </p>
  </article>
</template>
