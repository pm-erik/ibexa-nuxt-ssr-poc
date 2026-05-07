import type { Component } from 'vue'
import ArticleEmbed from './ArticleEmbed.vue'
import FileEmbed from './FileEmbed.vue'
import GenericEmbed from './GenericEmbed.vue'
import ImageEmbed from './ImageEmbed.vue'

const registry: Record<string, Component> = {
  article: ArticleEmbed,
  file: FileEmbed,
  image: ImageEmbed,
}

/**
 * Mirrors ibexa's "view per content type" pattern (e.g. `embed/image`,
 * `embed/article`) on the vue side. Falls back to a generic card for
 * content types we haven't shipped a dedicated component for.
 */
export function resolveEmbedComponent(contentTypeIdentifier: string): Component {
  return registry[contentTypeIdentifier] ?? GenericEmbed
}
