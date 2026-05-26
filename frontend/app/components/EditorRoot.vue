<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { resolveBlockComponent } from './blocks'
import type { components } from '~/types/api'

type PageDto = components['schemas']['PageDto']
type BlockDto = components['schemas']['BlockDto']

interface Marker {
  el: HTMLElement
  block: BlockDto
  // identity key for the el — different DOM node for same blockId (e.g. after
  // ibexa swaps markers on republish) → different mountKey → vue unmounts + remounts.
  mountKey: string
}

const markers = ref<Marker[]>([])
let pageDtoFallback: PageDto | null = null
let observer: MutationObserver | null = null

// marker el identity — detects DOM node swaps (ibexa serialize+reinject)
// and prevents stacking vue renders on re-injected markers.
const elIdMap = new WeakMap<HTMLElement, number>()
let elIdCounter = 0
const preparedEls = new WeakSet<HTMLElement>()

function elIdentity(el: HTMLElement): number {
  let id = elIdMap.get(el)
  if (id === undefined) {
    id = ++elIdCounter
    elIdMap.set(el, id)
  }
  return id
}

function prepareMarker(el: HTMLElement): void {
  if (preparedEls.has(el)) {
    return
  }
  preparedEls.add(el)
  // Ibexa's react admin may serialize the block-preview DOM (capturing vue's
  // already-mounted output) and re-inject it — leaving a stale <article> inside
  // a "fresh" marker el. Clear it once before vue mounts so renders don't stack.
  // Sibling data scripts live outside the marker, so nothing valuable is lost.
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

function readPageDtoFallback(): PageDto | null {
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

function readSiblingData(blockId: string): BlockDto | null {
  // Look up sibling script[data-for="..."] anywhere in the document.
  const script = document.querySelector<HTMLScriptElement>(`script[data-block-data][data-for="${CSS.escape(blockId)}"]`)
  if (!script?.textContent) {
    return null
  }
  try {
    return JSON.parse(script.textContent) as BlockDto
  } catch (err) {
    console.error(`editor bundle: failed to parse sibling data for block ${blockId}`, err)
    return null
  }
}

function buildMarker(el: HTMLElement, fallback: Map<string, BlockDto>): Marker | null {
  const blockId = el.dataset.blockId
  if (!blockId) {
    return null
  }
  const block = readSiblingData(blockId) ?? fallback.get(blockId) ?? null
  if (block === null) {
    return null
  }
  prepareMarker(el)
  return {
    el,
    block,
    mountKey: `${blockId}-${elIdentity(el)}`,
  }
}

function rescan(): void {
  const fallback = pageDtoFallback ? indexBlocks(pageDtoFallback) : new Map<string, BlockDto>()
  const els = document.querySelectorAll<HTMLElement>('[data-block-vue]')

  const next: Marker[] = []
  els.forEach((el) => {
    const marker = buildMarker(el, fallback)
    if (marker !== null) {
      next.push(marker)
    }
  })
  markers.value = next
}

function touchesBlock(node: Node): boolean {
  return node instanceof HTMLElement && (
    node.matches('[data-block-vue]') || !!node.querySelector('[data-block-vue]') ||
    node.matches('script[data-block-data]') || !!node.querySelector('script[data-block-data]')
  )
}

function shouldRescan(record: MutationRecord): boolean {
  return [...record.addedNodes, ...record.removedNodes].some(touchesBlock)
}

let pendingScan: number | null = null
function scheduleRescan(): void {
  if (pendingScan !== null) {
    return
  }
  pendingScan = window.requestAnimationFrame(() => {
    pendingScan = null
    rescan()
  })
}

onMounted(() => {
  pageDtoFallback = readPageDtoFallback()
  rescan()

  observer = new MutationObserver((records) => {
    for (const record of records) {
      if (shouldRescan(record)) {
        scheduleRescan()
        return
      }
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
  if (pendingScan !== null) {
    cancelAnimationFrame(pendingScan)
    pendingScan = null
  }
})
</script>

<template>
  <template v-for="m in markers" :key="m.mountKey">
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
