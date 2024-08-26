<template>
  <div>
    <a :href="props.path">Télécharger : {{ props.path }}</a>
  </div>
</template>

<script setup lang="ts">
import type { DocumentRenderProps } from '.'

const props = defineProps<DocumentRenderProps>()
</script>

<style scoped></style>
