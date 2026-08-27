<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastNotification from './components/common/ToastNotification.vue'
import MainLayout from './components/layout/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
  <ToastNotification />
</template>
