<template>
  <iframe :src="fullPath" frameborder="0" width="100%" height="100%"
    >This is an embedded <a target="_blank" href="http://office.com">Microsoft Office</a> document,
    powered by <a target="_blank" href="http://office.com/webapps">Office Online</a>.</iframe
  >
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DocumentRenderProps } from '.'

const props = defineProps<DocumentRenderProps>()

const fullPath = computed(
  () =>
    'https://view.officeapps.live.com/op/embed.aspx?src=https://dgoms.github.io/sams' + props.path
)
</script>

<style scoped></style>
