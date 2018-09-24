<template>
  <div class="p-acts">
    <div class="m-tlt">
      <span class="u-tlt">Recommended Activities</span>
    </div>
    <div class="m-list">
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </div>
  </div>
</template>

<script>
import Activity from '@/components/Activity'
export default {
  name: 'Acts',
  data() {
    return {
    }
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
