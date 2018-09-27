<template>
  <div class="c-bottomButton">
    <router-link v-if="showBack" to="/acts" class="u-goBack">BACK</router-link>
    <div class="u-other">
      <slot></slot>
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
.c-bottomButton {
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
  max-width: 7.5rem;
  margin: auto;
  .u-goBack {
    width: 2rem;
    color: #cb0000;
    background: white;
    font-weight: normal;
  }
  .u-other {
    flex: 1;
  }
}
</style>

