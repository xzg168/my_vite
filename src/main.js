import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import LuckDraw from "vue-luck-draw/vue3";
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

createApp(App).use(router).use(store).use(Antd).use(LuckDraw).mount('#app')
