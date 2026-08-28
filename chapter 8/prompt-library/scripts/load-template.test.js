import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loadTemplate } from './load-template.js'

test('fills known placeholders and leaves unknown ones untouched', async () => {
  const filled = await loadTemplate('concept-explainer', {
    stack: 'Vue 3.5',
    concept: 'provide/inject',
  })
  assert.match(filled, /senior Vue 3\.5 engineer/)
  assert.match(filled, /Explain provide\/inject clearly/)
  // {{project}} was never supplied, so it should still be there verbatim.
  assert.match(filled, /Project: \{\{project\}\}/)
})

test('throws a clear error for a template that does not exist', async () => {
  await assert.rejects(() => loadTemplate('does-not-exist'))
})
