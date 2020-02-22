<template>
  <div class="accounts-widget">
    <sticky-header>
      <h3 slot="amountText"
          v-if="!isAmount"
          class="amount-text">{{ getAmount | comma('kr') }}원 송금</h3>
    </sticky-header>
    <div class="contents-wrap">
      <div class="list-widget">
        <a-list itemLayout="horizontal"
                :loading="loading"
                :dataSource="getAccountsData">
          <a-list-item slot="renderItem"
                       slot-scope="item"
                       class="list-item"
                       @click="bankSelectedEvent(item)">
            <a-list-item-meta :description="bankInfoTextConverter(item)">
              <p slot="title">{{ item.accountHolder }}</p>
              <a-avatar slot="avatar"
                        :src="item.bankImageUrl"/>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
// 3rd party library
import { mapGetters, mapActions, mapMutations } from 'vuex'
// stores
import { GET_AMOUNT, GET_ACCOUNTS, SET_SELECTED_ACCOUNT } from '@/stores/modules/accounts.module'
// components
import StickyHeader from '@/components/StickyHeader/StickyHeader'

export default {
  name: 'Accounts',
  components: {
    StickyHeader
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { amount } = vm.$store.state
      if (!amount) {
        vm.$router.push({ name: 'Home' })
        return false
      }
    })
  },
  data () {
    return {
      listData: [],
      loading: true
    }
  },
  computed: {
    isAmount () {
      return !this.getAmount
    },
    ...mapGetters({
      getAmount: GET_AMOUNT,
      getAccountsData: GET_ACCOUNTS
    })
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getAccounts()
        .then((response) => {
          this.loading = false
        })
    },
    bankInfoTextConverter (item) {
      return item.bankName + ' ' + item.accountNumber
    },
    bankSelectedEvent (item) {
      this.setSelectedAccount(item)
      this.$router.push({ name: 'AccountsMy' })
    },
    ...mapMutations({
      setSelectedAccount: SET_SELECTED_ACCOUNT
    }),
    ...mapActions({
      getAccounts: GET_ACCOUNTS
    })
  }
}

</script>
