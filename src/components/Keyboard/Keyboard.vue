<template>
  <div class="keyboard">
    <button type="button"
            class="keyboard-button"
            v-for="value in 12"
            :key="value">
      <span v-if="value < 10 || value === 11"
            @click="touchAddEventHandler(valueFilter(value))">{{ valueFilter(value) }}</span>
      <span v-else-if="value === 10"
            class="cancel-text"
            @click="touchClearAllhandler">취소</span>
      <span v-if="value === 12"
            @click="touchClearhandler">
        <img src="../../assets/svg/icn-navigation-android-back.svg"
             class="icn-navigation-back">       
      </span>
    </button>
  </div>
</template>

<script>
export default {

  name: 'Keyboard',
  props: {
    touchAddEventHandler: {
      type: Function,
      default: (value) => {
        return false
      }
    },
    touchClearAllhandler: {
      type: Function,
      default: (value) => {
        return false
      }
    },
    touchClearhandler: {
      type: Function,
      default: (value) => {
        return false
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    valueFilter (value) {
      return (value === 11) ? 0 : value
    }
  }
}
</script>
