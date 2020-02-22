import Vue from 'vue'
import VueRouter from 'vue-router'
// layout
import Header from '@/common/Header.vue'
// contents
import Home from '@/pages/Home.vue'
import Accounts from '@/pages/Accounts/Accounts.vue'
import AccountsMy from '@/pages/Accounts/AccountsMy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      contents: Home
    }
  },
  {
    path: '/accounts',
    name: 'Accounts',
    components: {
      header: Header,
      contents: Accounts
    }
  },
  {
    path: '/accounts/my',
    name: 'AccountsMy',
    components: {
      header: Header,
      contents: AccountsMy
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
