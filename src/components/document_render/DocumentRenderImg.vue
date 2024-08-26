<template>
  <div>
    <img :src="props.path" width="100%" height="100%" />
  </div>
</template>

<script setup lang="ts">
import type { DocumentRenderProps } from '.'

const props = defineProps<DocumentRenderProps>()
</script>

<style scoped></style>
