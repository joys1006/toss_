<template>
  <div class="accounts-my-widget">
    <sticky-header />
    <div class="contents-wrap">
      <div class="selected-accounts-information">
        <div class="information-text">
          <div class="content">
            <p><strong>{{ getSelectedAccount.bankName }}</strong>님 계좌로</p>
            <p><strong>{{ getAmount | comma('kr') }}원</strong>을 보냅니다</p>
          </div>
          <p class="description">{{ bankInfoTextConverter() }}</p>
        </div>
        <a-avatar slot="avatar"
                  :src="getSelectedAccount.bankImageUrl"/>
      </div>
      <div class="list-widget">
        <h4>출금 계좌</h4>
        <a-list itemLayout="horizontal"
                :loading="loading"
                :dataSource="getAccountsMyData">
          <a-list-item slot="renderItem"
                       slot-scope="item, index"
                       class="list-item"
                       :class="{ active : (index === selectedNumber) }"
                       @click="bankSelectedEvent(item, index)">
            <a-list-item-meta :description="commaConverter(item.accountBalance)">
              <p slot="title">{{ item.accountName }}</p>
              <a-avatar slot="avatar"
                        :src="item.bankImageUrl"/>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
        <a-button type="primary"
                  class="success-button"
                  @click="successEvent">보내기</a-button>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
// stores
import { GET_AMOUNT, GET_SELECTED_ACCOUNT, GET_SELECTED_ACCOUNTS_MY, GET_ACCOUNTS_MY, SET_SELECTED_ACCOUNTS_MY } from '@/stores/modules/accounts.module'
// components
import StickyHeader from '@/components/StickyHeader/StickyHeader'
// utils
import { comma } from '@/utils'
import _ from 'lodash'

export default {
  name: 'AccountsMy',
  components: {
    StickyHeader
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { amount, selectedAccount } = vm.$store.state
      if (_.isEmpty(selectedAccount) && !amount) {
        vm.$router.push({ name: 'Home' })
        return false
      }
    })
  },
  data () {
    return {
      loading: true,
      selectedNumber: 0
    }
  },
  computed: {
    ...mapGetters({
      getAmount: GET_AMOUNT,
      getAccountsMyData: GET_ACCOUNTS_MY,
      getSelectedAccount: GET_SELECTED_ACCOUNT,
      getSelectedAccountsMy: GET_SELECTED_ACCOUNTS_MY
    })
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getAccountsMy()
        .then(() => {
          this.loading = false
        })
    },
    bankSelectedEvent (item, index) {
      this.selectedNumber = index
      this.setSelectedAccountsMy(item)
    },
    successEvent () {
      const { accountName } = this.getSelectedAccountsMy
      const { bankName, accountNumber, accountHolder } = this.getSelectedAccount
      const amount = this.getAmount
      const message = `
        보낼사람: ${accountHolder}\n
        보낼 계좌번호: ${bankName} ${accountNumber}\n
        보낼 금액: ${comma(amount)}원\n
        출금 계좌: ${accountName}
      `
      alert(message)
    },
    commaConverter (item) {
      return `${comma(item)} 원`
    },
    bankInfoTextConverter (item) {
      return this.getSelectedAccount.bankName + ' ' + this.getSelectedAccount.accountNumber
    },
    ...mapActions({
      getAccountsMy: GET_ACCOUNTS_MY
    }),
    ...mapMutations({
      setSelectedAccountsMy: SET_SELECTED_ACCOUNTS_MY
    })
  }
}

</script>
