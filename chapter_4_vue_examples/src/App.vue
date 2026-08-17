<!--
  Chapter 4 example gallery — a small nav that lets you click through
  every runnable component from the chapter without spinning up a
  separate project per beat. Pick an entry on the left, open your
  browser console, and follow the chapter's Predict / Observe / Prompt
  steps against the live component on the right.

  Each entry resets to fresh seed data when selected, since several
  experiments are designed to be clicked into a "broken" state.
-->
<script setup>
import { ref, computed, shallowRef, watch } from 'vue'

import ListComponent from './examples/01-core-rule/ListComponent.vue'
import SelectableList from './examples/03-props-and-emitters/SelectableList.vue'
import ParentUsageDemo from './examples/03-props-and-emitters/ParentUsageDemo.vue'
import SelectableListAnnotated from './examples/04-annotated-components/SelectableListAnnotated.vue'
import ExperimentSetup from './examples/05-experimentation/00-ExperimentSetup.vue'
import Experiment1 from './examples/05-experimentation/Experiment1_ToggleReactiveValue.vue'
import Experiment2 from './examples/05-experimentation/Experiment2_RemoveComputed.vue'
import Experiment3 from './examples/05-experimentation/Experiment3_InlineVsComputed.vue'
import Experiment4 from './examples/05-experimentation/Experiment4_MutateVsReplace.vue'
import Experiment5 from './examples/05-experimentation/Experiment5_BreakTheKey.vue'
import Experiment6 from './examples/05-experimentation/Experiment6_DuplicateIds.vue'
import Experiment7 from './examples/05-experimentation/Experiment7_RemoveEmit.vue'
import Experiment8 from './examples/05-experimentation/Experiment8_WatchReactivity.vue'
import ShoppingList from './examples/06-mini-project/ShoppingList.vue'

function seedItems() {
  return [
    { id: 1, name: 'Apple', selected: false },
    { id: 2, name: 'Banana', selected: false },
    { id: 3, name: 'Orange', selected: false },
  ]
}

const sections = [
  {
    heading: '1. The Core Rule',
    entries: [
      {
        id: 'core-rule',
        label: 'ListComponent (Sample Code)',
        component: ListComponent,
        standalone: true,
        note: 'Self-contained — owns its own ref([...]) and computed(). Matches Figure 4.1.',
      },
    ],
  },
  {
    heading: '3. Props and Emitters',
    entries: [
      {
        id: 'selectable-list',
        label: 'SelectableList (bare)',
        component: SelectableList,
        note: 'Props in, events out. Click items and watch selection-change payloads below.',
        needsSelectionLog: true,
      },
      {
        id: 'parent-usage',
        label: 'ParentUsageDemo (App.vue wiring)',
        component: ParentUsageDemo,
        standalone: true,
        note: 'Mirrors the chapter\'s App.vue: v-model:items + @selection-change wired up by a parent.',
      },
    ],
  },
  {
    heading: '4. Annotated Components',
    entries: [
      {
        id: 'annotated',
        label: 'SelectableList (fully annotated)',
        component: SelectableListAnnotated,
        note: 'Same behavior as SelectableList — every part labeled per the annotation prompt.',
      },
    ],
  },
  {
    heading: '5. Experimentation',
    entries: [
      { id: 'exp-setup', label: '0. Debug playground', component: ExperimentSetup, note: 'Console logs + JSON dump added. Open your console.' },
      { id: 'exp-1', label: '1. Toggle a reactive value', component: Experiment1, note: 'Baseline behavior — click and observe.' },
      { id: 'exp-2', label: '2. Remove the computed', component: Experiment2, note: 'Intentionally broken: template still references the removed computed.' },
      { id: 'exp-3', label: '3. Inline logic vs computed', component: Experiment3, note: 'Works without computed() — but why is it discouraged?' },
      { id: 'exp-4', label: '4. Mutate vs replace the array', component: Experiment4, note: 'Mutates in place instead of creating a new array.' },
      { id: 'exp-5', label: '5. Break the key', component: Experiment5, note: ':key="index" instead of :key="item.id".' },
      { id: 'exp-6', label: '6. Duplicate IDs', component: Experiment6, standalone: true, note: 'Two seed items share id: 2 on purpose.' },
      { id: 'exp-7', label: '7. Remove the emit', component: Experiment7, note: 'toggleItem computes the change but never emits it.' },
      { id: 'exp-8', label: '8. Watch reactivity', component: Experiment8, note: 'Compare the one-time setup log to the re-running computed log.' },
    ],
  },
  {
    heading: '6. Mini Project',
    entries: [
      {
        id: 'mini-project',
        label: 'ShoppingList (sample output)',
        component: ShoppingList,
        note: 'The chapter\'s final "Sample Output" component for the annotation-pass prompt.',
      },
    ],
  },
]

const allEntries = sections.flatMap(s => s.entries)
const activeId = ref(allEntries[0].id)
const active = computed(() => allEntries.find(e => e.id === activeId.value))

const items = shallowRef(seedItems())
const selectionLog = ref([])

watch(activeId, () => {
  items.value = seedItems()
  selectionLog.value = []
})

function handleSelectionChange(payload) {
  selectionLog.value.unshift(JSON.stringify(payload))
}
</script>

<template>
  <div class="shell">
    <aside class="sidebar">
      <h1>Chapter 4 — Vue Examples</h1>
      <div v-for="section in sections" :key="section.heading" class="section">
        <h2>{{ section.heading }}</h2>
        <button
          v-for="entry in section.entries"
          :key="entry.id"
          :class="{ active: activeId === entry.id }"
          @click="activeId = entry.id"
        >
          {{ entry.label }}
        </button>
      </div>
    </aside>

    <main class="main">
      <div class="example-note">{{ active.note }}</div>

      <div class="example-frame">
        <component
          v-if="active.standalone"
          :is="active.component"
          :key="active.id"
        />
        <component
          v-else
          :is="active.component"
          :key="active.id"
          :items="items"
          title="My Shopping List"
          @update:items="items = $event"
          @selection-change="handleSelectionChange"
        />
      </div>

      <div class="debug-json" v-if="active.needsSelectionLog && selectionLog.length">
        <strong>selection-change payloads (newest first):</strong>
        <div v-for="(entry, i) in selectionLog" :key="i">{{ entry }}</div>
      </div>
    </main>
  </div>
</template>
