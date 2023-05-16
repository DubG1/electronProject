import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const themeConfigs = {
    dark: false,
    colors: {
        primary: '#449A8B'
    }
}


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'themeConfigs',
        themes: {
            themeConfigs,
        }
    }
})

createApp(App)
.use(vuetify)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
