// apis
import AccountsService from '@/services/Apis/transfer/accounts.service';

// types
const GET_ACCOUNTS = 'accounts/GET_ACCOUNTS'
const GET_ACCOUNTS_MY = 'accounts/GET_ACCOUNTS_MY'


const states = {
  accounts: [],
  accountsMy: []
}

const actions = {
  [GET_ACCOUNTS]: ({ commit }) => {
    return AccountsService.accounts()
      .then((response) => {
        commit('accounts', response);
      });
  }
}

const accountsStores = {
	states: states,
	actions: actions
};

export default accountsStores;