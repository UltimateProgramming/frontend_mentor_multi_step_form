import './assets/font.css'
import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import FormCardView from './views/Form-Card-View.vue'
import SuccessView from './views/Success-View.vue'

const pinia = createPinia()
const app = createApp(App)

const routes = [
  { path: '/', component: FormCardView },
  { path: '/success', component: SuccessView }
]
const router = createRouter({
  history: createWebHistory('/frontend_mentor_multi_step_form/'),
  routes
})

app.use(pinia)
app.use(router)
app.mount('#app')
