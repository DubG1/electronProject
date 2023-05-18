import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'
import { createRouter, createWebHistory } from 'vue-router'
import { router } from './router/index'
import './assets/main.css'

//vuetify
import 'vuetify/dist/vuetify.css'
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

const app = createApp(App);
app.use(router)
app.use(vuetify).mount('#app')
