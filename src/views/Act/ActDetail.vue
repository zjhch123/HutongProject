<template>
  <div class="p-actDetail">
    <img v-if="!!content" :src="content" class="u-act"/>
    <BottomButton>
      <router-link :to="`/act/${id}/submit`" class="u-submit">SIGN UP NOW</router-link>
    </BottomButton>
  </div>
</template>

<script>
import BottomButton from '@/components/BottomButton'
import { getActDetail } from '../../api'
export default {
  name: 'ActDetail',
  data() {
    return {
      id: 0,
      content: null,
    }
  },
  mounted() {
    this.launch()
  },
  methods: {
    async launch() {
      this.id = this.$route.params.id
      const ret = await getActDetail(this.id)
      if (ret.code !== 200) {
        // TODO error
      }
      const detail = ret.content.ActivityDetail
      this.content = detail.content
      window.shareConfig = {
        title: detail.shareTitle,
        desc: detail.shareDesc,
        timeline_title: detail.shareTimeline,
        url: window.location.href,
        imagePath: (window.location.host + detail.shareImage).replace('https:', 'http:'),
        successCb: () => {}
      }
      window.resetShareConfig()
    }
  },
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
  padding-bottom: 1.4rem;
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
