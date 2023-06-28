/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { Plugin } from 'vue-responsive-video-background-player'

const app = createApp(App)

app.use(Plugin)

registerPlugins(app)

app.mount('#app')
