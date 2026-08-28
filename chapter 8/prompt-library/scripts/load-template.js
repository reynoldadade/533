import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

// fileURLToPath decodes %20 and friends. The book's original version used
// TEMPLATES_DIR.pathname directly, which breaks the moment your project
// lives under a folder with a space in its name (this one does: "chapter 8").
const TEMPLATES_DIR = fileURLToPath(new URL('../prompts/', import.meta.url))

// Replaces {{var}} placeholders with values from the vars object.
// Leaves unknown placeholders untouched so you notice and fix them.
export async function loadTemplate(name, vars = {}) {
  const path = join(TEMPLATES_DIR, `${name}.md`)
  const raw = await readFile(path, 'utf8')
  return raw.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    vars[key] ?? `{{${key}}}`
  )
}

// Example usage from a CLI:
// node scripts/load-template.js concept-explainer \
//   stack="Vue 3.5" concept="provide/inject"
//
// The book's original check was `import.meta.url === file://${process.argv[1]}`.
// process.argv[1] is a raw filesystem path; import.meta.url is percent-encoded
// (a space becomes %20), so that comparison silently fails for exactly the
// kind of path this project sits under. Comparing two decoded paths instead
// fixes it.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [name, ...rest] = process.argv.slice(2)
  const vars = Object.fromEntries(rest.map(s => s.split('=')))
  loadTemplate(name, vars).then(console.log)
}
