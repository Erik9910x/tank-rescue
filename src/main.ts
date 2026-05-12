import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TankRescue from './views/tank-rescue/index.vue'
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tank-rescue'
    },
    {
      path: '/tank-rescue',
      name: 'tank-rescue',
      component: TankRescue,
      meta: {
        title: 'Tank Rescue - Game Giải Cứu Xe Tăng',
        description: 'Điều khiển xe tăng, né đạn và tiêu diệt kẻ địch để giải cứu công chúa!'
      }
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
