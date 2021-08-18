import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Homepage from './view/pages/Homepage.vue'
import AddAdvertPage from './view/pages/AddAdvertPage.vue'
import AdvertDetailPage from './view/pages/AdvertDetailPage.vue'
import PreviewPage from './view/pages/PreviewPage.vue'
import CategoryPage from './view/pages/CategoryPage.vue'
import BoostAdvertPage from './view/pages/BoostAdvertPage.vue'






Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Homepage },
  { path: '/add', component: AddAdvertPage },
  { path: '/detail', component: AdvertDetailPage },
  { path: '/preview', component: PreviewPage },
  { path: '/category', component: CategoryPage },
  { path: '/boostAdvert', component: BoostAdvertPage },




]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({

  render: h => h(App),
  router
}).$mount('#app')

