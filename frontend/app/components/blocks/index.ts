import type { Component } from 'vue'
import RichtextBlock from './RichtextBlock.vue'
import UnknownBlock from './UnknownBlock.vue'

const registry: Record<string, Component> = {
  richtext: RichtextBlock,
}

export function resolveBlockComponent(type: string): Component {
  return registry[type] ?? UnknownBlock
}
