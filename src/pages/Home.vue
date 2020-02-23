<template>
  <div class="home-widget">
    <div class="amount-widget">
      <div class="amount-box">
        <p class="amount">{{ amount | comma('kr') }}<span class="currency">원</span></p>
        <p class="description" :class="{ active : isMessage }">최대 200만원까지 입력할 수 있습니다.</p>
      </div>
    </div>
    <div class="keyboard-widget">
      <keyboard :amount="amount"
                :touchAddEventHandler="keyboardAddEvent"
                :touchClearAllhandler="keyboardClearAllEvent"
                :touchClearhandler="keyboardClearEvent" />
      <a-button type="primary"
                :disabled="disabled"
                class="success-button"
                @click="successEvent">보내기</a-button>
    </div>
  </div>
</template>

<script>
// 3rd party libaray
import { mapMutations, mapGetters } from 'vuex'
// components
import Keyboard from '@/components/Keyboard/Keyboard'
// stores
import { GET_AMOUNT, SET_AMOUNT } from '@/stores/modules/accounts.module'

export default {
  name: 'Home',
  components: {
    Keyboard
  },
  data () {
    return {
      amount: '',
      max: 2000000
    }
  },
  computed: {
    ...mapGetters({
      getAmount: GET_AMOUNT
    }),
    disabled () {
      return !this.amount
    },
    isMessage () {
      let result = false
      if (Number(this.amount) === this.max) {
        result = true
      }

      return result
    }
  },
  methods: {
    keyboardAddEvent (value) {
      const valueStr = value + ''

      if (value === 0 && !this.amount) {
        return false
      }

      this.amount += valueStr

      if (Number(this.amount) > this.max) {
        this.amount = this.max + ''
      }
    },
    keyboardClearAllEvent () {
      this.amount = ''
    },
    keyboardClearEvent () {
      const amount = this.amount.split('')
      amount.pop()
      this.amount = amount.join('')
    },
    successEvent () {
      this.setAmount(this.amount)
      this.$router.push({ name: 'Accounts' })
    },
    ...mapMutations({
      setAmount: SET_AMOUNT
    })
  }
}
</script>
