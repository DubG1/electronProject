import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/dist/vuetify.css'
import './samples/node-api'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import { router } from './router/index'

const themeConfigs = {
    dark: false,
    colors: {
        primary: '#449A8B'
    }
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'themeConfigs',
        themes: {
            themeConfigs,
        }
    }
})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
