<template>
  <div class="p-acts">
    <div class="m-tlt">
      <span class="u-tlt">Recommended Activities</span>
    </div>
    <div class="m-list">
      <Activity v-for="item in acts" :key="item.id" :activity="item"/>
    </div>
  </div>
</template>

<script>
import Activity from '@/components/Activity'
import utils from '../../lib/utils'
import { getActs } from '../../api'
export default {
  name: 'Acts',
  data() {
    return {
      page: 1,
      totalPage: 1,
      acts: [],
      scrollFunc: null
    }
  },
  mounted() {
    this.launch()
    this.scrollFunc = utils.debounce(this.onScroll, 200).bind(this)
    document.addEventListener('scroll', this.scrollFunc)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollFunc)
  },
  methods: {
    launch() {
      this.getActs()
    },
    async getActs(page = 1) {
      const {
        code,
        content
      } = await getActs(page)
      if (code !== 200) {
        // TODO error
      }
      this.page = content.page
      this.totalPage = content.totalPage
      this.acts = [
        ...this.acts,
        ...content.list,
      ]
    },
    onScroll() {
      if (window.scrollY > document.documentElement.clientHeight * 0.7 && this.page < this.totalPage) {
        this.getActs(this.page + 1)
      }
    },
  },
  components: {
    Activity
  }
}
</script>
<style lang="scss" scoped>
.p-acts {
  box-sizing: border-box;
}
.m-tlt {
  padding: .16rem .38rem;
  text-align: left;
  font-size: .46rem;
  font-weight: bolder;
  color: #363434;
  .u-tlt {
    line-height: .82rem;
    display: block;
  }
}
</style>
