import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/dist/vuetify.css'
import './samples/node-api'
import { createVuetify } from 'vuetify'

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
    .use(vuetify)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
