<!--
  From "A Reactivity Bug, Walked Through." Kept exactly as broken as
  the chapter presents it, on purpose - this is the "before" half of a
  Probe/Build/Reflect/Catalogue pass, not something meant to run.

  As written, `items = [...items, item]` reassigns a `const` binding,
  which JavaScript itself would refuse at runtime with "Assignment to
  constant variable." The chapter's own Reflect step surfaces exactly
  this: the bug is subtler than "the watcher doesn't fire," it depends
  on whether the binding was declared with const or let. See Fixed.vue
  for the corrected version and the note in ../../README.md.
-->
<script setup>
import { ref, watch } from 'vue'

const items = ref([])

// We expect this to log every time the list changes.
watch(items, (n) => console.log('items changed', n))

function addItem(item) {
  // BUG 1: replacing the binding of the ref instead of mutating .value
  items = [...items, item]
  // BUG 2 (in a sibling component): mutating a prop directly
  // props.items.push(item)
}
</script>
