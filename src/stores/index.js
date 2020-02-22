import Vue from 'vue'
import Vuex from 'vuex'

import accountsModule from './modules/accounts.module'

Vue.use(Vuex)

export default new Vuex.Store({
  ...accountsModule,
  modules: {
  }
})
