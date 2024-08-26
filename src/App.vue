<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <div style="display: flex; flex-direction: row">
    <header>
      <div class="wrapper">
        <Menu></Menu>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 800px;
  max-width: 800px;
  padding-right: calc(var(--section-gap) / 2);
}
</style>
