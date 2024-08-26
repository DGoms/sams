<template>
  <div>
    <iframe width="100%" height="100%" :src="props.path"></iframe>
  </div>
</template>

<script setup lang="ts">
import type { DocumentRenderProps } from '.'

const props = defineProps<DocumentRenderProps>()
</script>

<style scoped></style>
