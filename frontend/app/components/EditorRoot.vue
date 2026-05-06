<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { resolveBlockComponent } from './blocks'
import type { components } from '~/types/api'

type PageDto = components['schemas']['PageDto']
type BlockDto = components['schemas']['BlockDto']

interface Marker {
  el: HTMLElement
  block: BlockDto
}

const markers = ref<Marker[]>([])

function readPageDto(): PageDto | null {
  const el = document.getElementById('page-data')
  if (!el?.textContent) {
    return null
  }
  try {
    return JSON.parse(el.textContent) as PageDto
  } catch (err) {
    console.error('editor bundle: failed to parse #page-data', err)
    return null
  }
}

function indexBlocks(page: PageDto): Map<string, BlockDto> {
  const map = new Map<string, BlockDto>()
  for (const zone of page.zones) {
    for (const block of zone.blocks) {
      map.set(block.id, block)
    }
  }
  return map
}

onMounted(() => {
  const page = readPageDto()
  if (!page) {
    return
  }

  const blocksById = indexBlocks(page)
  const els = document.querySelectorAll<HTMLElement>('[data-block-vue]')
  const found: Marker[] = []

  els.forEach((el) => {
    const blockId = el.dataset.blockId
    if (!blockId) {
      return
    }
    const block = blocksById.get(blockId)
    if (!block) {
      console.warn(`editor bundle: block ${blockId} not in page-data`)
      return
    }
    found.push({ el, block })
  })

  markers.value = found
})
</script>

<template>
  <template v-for="m in markers" :key="m.block.id">
    <Teleport :to="m.el">
      <component
        :is="resolveBlockComponent(m.block.type)"
        :attributes="m.block.attributes"
        :block-id="m.block.id"
        :view="m.block.view"
      />
    </Teleport>
  </template>
</template>
