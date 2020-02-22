<template>
  <div class="home-widget">
    <div class="amount-widget">
      <div class="amount-box">
        <p class="amount">{{ amount | comma('kr') }}<span class="currency">원</span></p>
        <p class="description">{{ message }}</p>
      </div>
    </div>
    <div class="keyboard-widget">
      <keyboard :touchAddEventHandler="keyboardAddEvent"
                :touchClearAllhandler="keyboardClearAllEvent"
                :touchClearhandler="keyboardClearEvent" />
      <a-button type="primary"
                :disabled="disabled"
                class="success-button">보내기</a-button>
    </div>
  </div>
</template>

<script>
import Keyboard from '@/components/Keyboard/Keyboard'

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
    disabled () {
      return !this.amount
    },
    message () {
      let result = ''
      if (Number(this.amount) === this.max) {
        result = '최대 200만원까지 입력할 수 있습니다.'
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
    }
  }
}
</script>
