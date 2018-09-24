<template>
  <div class="p-more">
    <img :src="require('@/assets/more_inner.jpg')" class="u-bg" />
  </div>
</template>

<script>
export default {
  name: 'More',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
.p-more {
  box-sizing: border-box;
}
.u-bg {
  margin-top: 2rem;
  width: 7.5rem;
  display: block;
}
</style>
