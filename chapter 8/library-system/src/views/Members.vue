<!--
  New, not shown in the chapter text. The domain model names Member as
  one of the three core entities and "register a member" as part of
  the minimum feature set, but the chapter only ever builds Books.vue
  and Overdue.vue. This is the member-list screen those two imply.
-->
<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useLibrary } from '../stores/library'

const lib = useLibrary()
const { members } = storeToRefs(lib)

const newMember = reactive({ name: '', email: '' })

function registerMember() {
  if (!newMember.name.trim() || !newMember.email.trim()) return
  lib.addMember({ name: newMember.name.trim(), email: newMember.email.trim() })
  newMember.name = ''
  newMember.email = ''
}
</script>

<template>
  <h1>Members</h1>

  <form class="inline-form" @submit.prevent="registerMember">
    <input v-model="newMember.name" placeholder="Name" required />
    <input v-model="newMember.email" type="email" placeholder="Email" required />
    <button type="submit">Register member</button>
  </form>

  <table>
    <thead>
      <tr><th>Name</th><th>Email</th><th>Joined</th></tr>
    </thead>
    <tbody>
      <tr v-for="m in members" :key="m.id">
        <td>{{ m.name }}</td>
        <td>{{ m.email }}</td>
        <td>{{ new Date(m.joinedAt).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
</template>
