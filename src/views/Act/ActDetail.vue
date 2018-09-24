<template>
  <div class="p-actDetail">
    <img :src="require('@/assets/demo/actDetail.jpg')" class="u-act"/>
    <BottomButton>
      <router-link to="/act/1/submit" class="u-submit">SIGN UP NOW</router-link>
    </BottomButton>
  </div>
</template>

<script>
import BottomButton from '@/components/BottomButton'
export default {
  name: 'ActDetail',
  components: {
    BottomButton
  }
}
</script>
<style lang="scss" scoped>
.p-actDetail {
  min-height: 100vh;
  min-width: 100vw;
  background: white;
  padding-bottom: .9rem;
  box-sizing: border-box;
  .u-act {
    width: 7.5rem;
    display: block;
  }
  .u-submit {
    height: .9rem;
    line-height: .9rem;
    color: white;
    display: block;
  }
}
</style>
