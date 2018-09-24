<template>
  <div class="c-bottomButton">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.c-bottomButton {
  height: .9rem;
  line-height: .9rem;
  background: #cb0000;
  font-size: .34rem;
  font-weight: bold;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 7.5rem;
  margin: auto;
}
</style>

