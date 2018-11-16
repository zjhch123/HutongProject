<template>
  <div id="app">
    <transition :name="transitionName" :mode="mode">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      scrollY: 0,
      transitionName: 'slide-right',
      mode: 'in-out'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDep = to.path.split('/').length
      const fromDep = from.path.split('/').length
      if (toDep > fromDep) {
        this.transitionName = 'slide-right'
        this.mode = 'in-out'
      }
      if (toDep === fromDep) {
        this.transitionName = ''
      }
      if (toDep < fromDep) {
        this.transitionName = 'slide-left'
        this.mode = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.slide-right-enter {
  position: fixed;
  margin: auto;
  transform: translateX(100%);
  top: 0;
}
.slide-right-enter-active {
  position: fixed;
  margin: auto;
  width: 7.5rem;
  z-index: 3;
  height: 100vh;
  top: 0;
  transition: transform .6s;
}
.slide-right-enter-to {
  opacity: 1;
}
.slide-right-leave, .slide-right-leave-active, .slide-right-leave-to {
  display: none;
}

.slide-left-enter {
  display: block;
  top: 0;
  opacity: 0;
  width: 7.5rem;
}
.slide-left-enter-active {
  display: block;
  top: 0;
  height: 100vh;
  width: 7.5rem;
  opacity: 0;
  transition: all .6s;
}
.slide-left-enter-to {
  opacity: 1;
}
.slide-left-leave {
  position: fixed;
  top: 0;
  z-index: 8;
  height: 100vh;
  width: 7.5rem;
  transform: translateX(0);
}
.slide-left-leave-active {
  position: fixed;
  top: 0;
  z-index: 8;
  height: 100vh;
  width: 7.5rem;
  transition: all .8s;
}
.slide-left-leave-to { 
  transform: translateX(100%);
}
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
