<script setup lang="ts">
import type { components } from '~/types/api'
import { resolveBlockComponent } from './blocks'

type PageDto = components['schemas']['PageDto']

defineProps<{ page: PageDto }>()
</script>

<template>
  <div :class="['page', `layout-${page.layout}`]">
    <header class="page-header">
      <h1>{{ page.title }}</h1>
      <small>location {{ page.locationId }} · content {{ page.contentId }} · layout <code>{{ page.layout }}</code></small>
    </header>

    <div
      v-for="zone in page.zones"
      :key="zone.id"
      :class="['zone', `zone-${zone.name}`]"
    >
      <h2>zone: {{ zone.name }}</h2>
      <p v-if="zone.blocks.length === 0"><em>(no blocks)</em></p>

      <component
        v-for="block in zone.blocks"
        :key="block.id"
        :is="resolveBlockComponent(block.type)"
        :attributes="block.attributes"
        :block-id="block.id"
        :view="block.view"
      />
    </div>
  </div>
</template>
