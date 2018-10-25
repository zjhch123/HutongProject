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
@media only screen and (device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio : 3),
(device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio: 2),
(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .p-navIndex {
    padding-bottom: calc(1.1rem + constant(safe-area-inset-bottom)) !important;
    padding-bottom: calc(1.1rem + env(safe-area-inset-bottom)) !important;
  } 
  .m-footer {
    bottom: constant(safe-area-inset-bottom) !important;
    bottom: env(safe-area-inset-bottom) !important;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: constant(safe-area-inset-bottom) !important;
      top: env(safe-area-inset-bottom) !important;
      width: 100%;
      height: calc(1.2rem + constant(safe-area-inset-bottom)) !important;
      height: calc(1.2rem + env(safe-area-inset-bottom)) !important;
      background: #fff;
      z-index: 2;
    }
  } 
}
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
