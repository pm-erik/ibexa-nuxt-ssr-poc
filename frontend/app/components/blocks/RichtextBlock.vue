<script setup lang="ts">
defineProps<{
  attributes: { html?: string }
  blockId: string
  view: string
}>()
</script>

<template>
  <article class="block block-richtext">
    <div v-html="attributes.html" />
  </article>
</template>
