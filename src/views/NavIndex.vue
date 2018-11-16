<template>
  <div class="p-navIndex">
    <main class="m-main">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
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
  data: () => {
    return {
      navIndex: ['news', 'acts', 'more'],
      transitionName: 'swiper-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const fromPath = from.path.split('/')[1]
      const toPath = to.path.split('/')[1]
      if (this.navIndex.indexOf(toPath) - this.navIndex.indexOf(fromPath) > 0) {
        this.transitionName = 'swiper-right'
      } else {
        this.transitionName = 'swiper-left'
      }
    },
  },
  components: {
    TabNav
  }
}
</script>
<style lang="scss" scoped>
.swiper-right-enter {
  position: fixed;
  margin: auto;
  transform: translateX(100%);
  top: 0;
}
.swiper-right-enter-active, .swiper-right-leave-active {
  position: fixed;
  margin: auto;
  width: 7.5rem;
  top: 0;
  transition: all .6s;
}
.swiper-right-enter-to {
  opacity: 1;
}
.swiper-right-leave {
  position: fixed;
  margin: auto;
  top: 0;
}
.swiper-right-leave-to {
  transform: translateX(-100%);
}


.swiper-left-enter {
  position: fixed;
  margin: auto;
  transform: translateX(-100%);
  top: 0;
}
.swiper-left-enter-active, .swiper-left-leave-active {
  position: fixed;
  margin: auto;
  width: 7.5rem;
  top: 0;
  transition: all .6s;
}
.swiper-left-enter-to {
  opacity: 1;
}
.swiper-left-leave {
  position: fixed;
  margin: auto;
  top: 0;
}
.swiper-left-leave-to {
  transform: translateX(100%);
}



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
  position: relative;
  padding-bottom: 1.1rem;
}
.m-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 7.5rem;
  margin: auto;
  z-index: 3;
}
</style>
