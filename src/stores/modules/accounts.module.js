// apis
import AccountsService from '@/services/Apis/transfer/accounts.service'

// types
export const GET_AMOUNT = 'accounts/GET_AMOUNT'
export const GET_SELECTED_ACCOUNT = 'accounts/GET_SELECTED_ACCOUNT'
export const GET_SELECTED_ACCOUNTS_MY = 'accounts/GET_SELECTED_ACCOUNTS_MY'
export const GET_ACCOUNTS = 'accounts/GET_ACCOUNTS'
export const GET_ACCOUNTS_MY = 'accounts/GET_ACCOUNTS_MY'
export const SET_AMOUNT = 'accounts/SET_AMOUNT'
export const SET_ACCOUNTS_MY = 'accounts/SET_ACCOUNTS_MY'
export const SET_SELECTED_ACCOUNT = 'accounts/SET_SELECTED_ACCOUNT'
export const SET_SELECTED_ACCOUNTS_MY = 'accounts/SET_SELECTED_ACCOUNTS_MY'
export const SET_ACCOUNTS = 'accounts/SET_ACCOUNTS'

const states = {
  amount: '',
  selectedAccount: {},
  selectedAccountsMy: {},
  accounts: [],
  accountsMy: []
}

const getters = {
  [GET_AMOUNT]: (state) => {
    return state.amount
  },
  [GET_ACCOUNTS]: (state) => {
    return state.accounts
  },
  [GET_ACCOUNTS_MY]: (state) => {
    return state.accountsMy
  },
  [GET_SELECTED_ACCOUNT]: (state) => {
    return state.selectedAccount
  },
  [GET_SELECTED_ACCOUNTS_MY]: (state) => {
    return state.selectedAccountsMy
  }
}

const actions = {
  [GET_ACCOUNTS]: ({ commit }) => {
    commit(SET_ACCOUNTS, [])
    return AccountsService.getAccounts()
      .then((response) => {
        commit(SET_ACCOUNTS, response)
        return response
      })
  },
  [GET_ACCOUNTS_MY]: ({ commit }) => {
    commit(SET_ACCOUNTS, [])
    return AccountsService.getAccountsMy()
      .then((response) => {
        commit(SET_ACCOUNTS_MY, response)
        return response
      })
  }
}

const mutations = {
  [SET_AMOUNT]: (state, payload) => {
    states.amount = payload
  },
  [SET_SELECTED_ACCOUNT]: (state, payload) => {
    state.selectedAccount = payload
  },
  [SET_ACCOUNTS]: (state, payload) => {
    states.accounts = payload
  },
  [SET_ACCOUNTS_MY]: (state, payload) => {
    states.accountsMy = payload
  },
  [SET_SELECTED_ACCOUNTS_MY]: (state, payload) => {
    states.selectedAccountsMy = payload
  }
}

const accountsModule = {
  state: states,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default accountsModule
