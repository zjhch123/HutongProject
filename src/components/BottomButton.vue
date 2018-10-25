<template>
  <div class="c-bottomButton">
    <div class="m-container">
      <router-link v-if="showBack" to="/acts" class="u-goBack">BACK</router-link>
      <div class="u-other">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showBack: {
      type: Boolean,
      default: true,
    }
  }
}
</script>
<style lang="scss" scoped>
@media only screen and (device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio : 3),
(device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio: 2),
(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .c-bottomButton {
    height: calc(.9rem + constant(safe-area-inset-bottom)) !important;
    height: calc(.9rem + env(safe-area-inset-bottom)) !important;
  } 
  .m-container {
    padding-bottom: constant(safe-area-inset-bottom) !important;
    padding-bottom: env(safe-area-inset-bottom) !important;
  } 
  .u-goBack {
    height: calc(.9rem + constant(safe-area-inset-bottom)) !important;
    height: calc(.9rem + env(safe-area-inset-bottom)) !important;
  }
}
.c-bottomButton {
  height: .9rem;
  .m-container {
    height: .9rem;
    line-height: .9rem;
    background: #cb0000;
    font-size: .34rem;
    font-weight: bold;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    max-width: 7.5rem;
    margin: auto;
    .u-goBack {
      border-top: 1px solid #ebebeb;
      box-sizing: border-box;
      width: 2rem;
      color: #cb0000;
      background: white;
      font-weight: normal;
      position: relative;
      z-index: 3;
    }
    .u-other {
      flex: 1;
      position: relative;
      z-index: 3;
    }
  }
}
</style>

