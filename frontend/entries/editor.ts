import { createApp } from 'vue'
import EditorRoot from '../app/components/EditorRoot.vue'
import PageRenderer from '../app/components/PageRenderer.vue'
import type { components } from '../app/types/api'

type PageDto = components['schemas']['PageDto']

const markerEls = document.querySelectorAll('[data-block-vue]')
const pageDataEl = document.getElementById('page-data')
const standaloneRoot = document.getElementById('page-builder-app')

if (markerEls.length > 0) {
  // marker mode — ibexa pipeline integration: walk [data-block-vue] markers
  // and teleport block components into them via a single shared vue app
  const target = document.createElement('div')
  target.id = '__editor-vue-root__'
  target.style.display = 'none'
  document.body.appendChild(target)
  createApp(EditorRoot).mount(target)
} else if (standaloneRoot && pageDataEl?.textContent) {
  // page-data mode — standalone /_preview/pages/{id}: render the full PageDto tree
  try {
    const page = JSON.parse(pageDataEl.textContent) as PageDto
    createApp(PageRenderer, { page }).mount(standaloneRoot)
  } catch (err) {
    console.error('editor bundle: failed to parse #page-data', err)
  }
} else {
  console.warn('editor bundle loaded but neither markers nor #page-data found')
}
