import type { Component } from 'vue'
import EmbedBlock from './EmbedBlock.vue'
import RichtextBlock from './RichtextBlock.vue'
import UnknownBlock from './UnknownBlock.vue'

const registry: Record<string, Component> = {
  embed: EmbedBlock,
  richtext: RichtextBlock,
}

export function resolveBlockComponent(type: string): Component {
  return registry[type] ?? UnknownBlock
}
