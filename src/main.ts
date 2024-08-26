import './assets/main.css'
import 'vuetify/dist/vuetify.min.css'

import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VTreeview } from 'vuetify/labs/VTreeview'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components: {
    VTreeview
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
