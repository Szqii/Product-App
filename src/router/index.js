import Vue from 'vue'
import VueRouter from 'vue-router'
import urunGirisi from '../components/products/urun-girisi.vue'
import urunListesi from '../components/products/urun-listesi.vue'
import urunCikisi from '../components/products/urun-cikisi.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component : urunListesi},
  {path: '/add', component : urunGirisi},
  {path: '/remove', component : urunCikisi},
  {path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
