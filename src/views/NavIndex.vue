<template>
  <div class="p-navIndex">
    <main class="m-main">
      <router-view></router-view>
    </main>
    <section class="m-footer">
      <TabNav />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TabNav from '@/components/TabNav'
export default {
  name: 'home',
  components: {
    TabNav
  }
}
</script>
<style lang="scss" scoped>
.p-navIndex {
  padding-bottom: 1.1rem;
}
.m-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 7.5rem;
  margin: auto;
}
</style>
