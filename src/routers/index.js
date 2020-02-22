import Vue from 'vue'
import VueRouter from 'vue-router'
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
      contents: Accounts
    }
  },
  {
    path: '/accounts/my',
    name: 'AccountsMy',
    components: {
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
