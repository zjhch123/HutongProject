<template>
  <div class="p-actSubmitSuccess">
    <img :src="require('@/assets/success.png')" class="u-icon">
    <p class="u-text">SUCCESSFUL</p>
    <a href="javascript:;" class="u-btn f-red">SHARE</a>
    <router-link to='/acts' class="u-btn f-gray">HOME</router-link>
  </div>
</template>
<script>
import { getActDetail } from '../../api'
export default {
  name: 'ActSubmitSuccess',
  components: {
  },
  async mounted() {
    this.id = this.$route.params.id
    const ret = await getActDetail(this.id)
    if (ret.code !== 200) {
      // TODO error
    }
    const detail = ret.content.ActivityDetail
    window.shareConfig = {
      title: detail.shareTitle,
      desc: detail.shareDesc,
      timeline_title: detail.shareTimeline,
      url: window.location.href.split('#')[0] + `#/act/${this.id}`,
      imagePath: 'http://' + window.location.host + detail.shareImage,
      successCb: () => {}
    }
    window.resetShareConfig()
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.p-actSubmitSuccess {
  background: white;
  .u-icon {
    width: 1.6rem;
    display: block;
    margin: 3rem auto .3rem;
  }
  .u-text {
    font-size: .38rem;
    color: #393939;
    text-align: center;
    margin-bottom: 2rem;
  }
  .u-btn {
    width: 6.15rem;
    line-height: .78rem;
    height: .78rem;
    display: block;
    margin: .27rem auto 0;
    text-align: center;
    font-size: .3rem;
    box-sizing: border-box;
    border-radius: .14rem;
    &.f-red {
      color: #cb0000;
      border: 1px solid #cb0000;
    }
    &.f-gray {
      color: #2f2f2f;
      background: #ededf2;
    }
  }
}
</style>
