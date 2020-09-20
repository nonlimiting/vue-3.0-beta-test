/*
 * @Description: 
 * @Autor: destiny-race
 * @Date: 2020-09-20 21:27:51
 * @LastEditTime: 2020-09-20 21:56:07
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.use(router);
app.mount('#app')

// createApp(App).use(router).mount('#app')
