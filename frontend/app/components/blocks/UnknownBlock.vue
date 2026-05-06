<script setup lang="ts">
defineProps<{
  attributes: Record<string, unknown>
  blockId: string
  view: string
}>()
</script>

<template>
  <article class="block block-unknown">
    <header>
      <strong>unknown block</strong>
      <small>id {{ blockId }} · view {{ view }}</small>
    </header>
    <pre>{{ JSON.stringify(attributes, null, 2) }}</pre>
  </article>
</template>
