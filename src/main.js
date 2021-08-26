import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Homepage from './view/pages/Homepage.vue'
import AddAdvertPage from './view/pages/AddAdvertPage.vue'
import AdvertDetailPage from './view/pages/AdvertDetailPage.vue'
import CategoryPage from './view/pages/CategoryPage.vue'
import ProfilePage from './view/pages/ProfilePage.vue'
import AboutPage from './view/pages/AboutPage.vue'
import ContactUsPage from './view/pages/ContactUsPage.vue'



Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Homepage },
  { path: '/add', component: AddAdvertPage },
  { path: '/detail', component: AdvertDetailPage },
  { path: '/contact', component: ContactUsPage },


  { path: '/category', component: CategoryPage },
  { path: '/profile', component: ProfilePage },
  { path: '/about', component: AboutPage },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({

  render: h => h(App),
  router

}).$mount('#app')

