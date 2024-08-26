<template>
  <div>
    <v-treeview
      :items="items"
      :opened="pathParams"
      item-title="name"
      item-value="path"
      open-on-click
      density="compact"
      select-strategy="single-leaf"
      @click:select="onSelect"
    >
      <template v-slot:prepend="{ item, isOpen }">
        <v-icon v-if="!item.extension">
          {{ isOpen ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.extension] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const pathParams = reactive(route.params.paths as string[])

const files = ref<{ [key: string]: string }>({
  '.html': 'mdi-language-html5',
  '.js': 'mdi-nodejs',
  '.json': 'mdi-code-json',
  '.md': 'mdi-language-markdown',
  '.pdf': 'mdi-file-pdf-box',
  '.png': 'mdi-file-image',
  '.txt': 'mdi-file-document-outline',
  '.xls': 'mdi-file-excel'
})

interface File {
  path: string
  name: string
  extension?: string
  children?: File[]
}

const items = ref(((window as any).docs as File).children)

async function onSelect(item: any) {
  router.push('/document' + item.id)
}

// watch()
</script>

<style scoped></style>
