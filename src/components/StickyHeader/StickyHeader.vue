<template>
  <div class="sticky-header">
    <div class="left-button">
      <button type="button"
              @click="$router.back()">
        <img src="../../assets/svg/icn-navigation-ios-back.svg"
             class="icn-navigation-back"> 
      </button>
    </div>
    <slot name="amountText"></slot>
    <div class="right-button"></div>
  </div>
</template>

<script>
export default {
  name: 'StickyHeader',
  data () {
    return {
    }
  }
}
</script>
