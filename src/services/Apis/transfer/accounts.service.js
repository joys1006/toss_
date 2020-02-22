// Project Sources
import _axios from 'services/Axios/InitializedAxios';

const AccountsService = {
  /**
   * @description 입금계좌목록
   */
  getAccounts () {
    return _axios.get('/transfer/accounts');
  },
  /**
   * [getAccountsMy 출금계좌목록]
   * @return {[type]} [description]
   */
  getAccountsMy () {
    return _axios.get('/transfer/accounts/my');
  }
};

export default AccountsService;
