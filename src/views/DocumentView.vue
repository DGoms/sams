<template>
  <div id="document">
    <component :is="docRender.is" :path="docRender.path"></component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getDocumentRenderer } from '@/components/document_render'

const route = useRoute()

const docRender = computed(() => {
  const pathParams = route.params.paths as string[]

  const docPath = pathParams.join('/')
  const fullUrl = `/docs/${docPath}`
  return {
    path: fullUrl,
    is: getDocumentRenderer(fullUrl)
  }
})
</script>

<style scoped>
#document {
  width: 100%;
  height: 80vh;
}
</style>
