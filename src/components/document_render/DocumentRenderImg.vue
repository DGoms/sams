<template>
  <div style="width: 100%; height: 100%; max-width: 100%; max-height: 100%">
    <img :src="'.' + props.path" />
  </div>
</template>

<script setup lang="ts">
import type { DocumentRenderProps } from '.'

const props = defineProps<DocumentRenderProps>()
</script>

<style scoped></style>
