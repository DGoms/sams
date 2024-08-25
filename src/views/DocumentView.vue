<template>
  <div>
    <iframe :src="fullUrl"></iframe>
    <!-- <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const docPath = '/' + (route.params.paths as string[]).join('/')
const fullUrl = `/docs/${docPath}`
</script>

<style scoped>
iframe {
  width: 100%;
  height: 80vh;
}
</style>
