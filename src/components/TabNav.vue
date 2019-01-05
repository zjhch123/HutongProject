<template>
  <div class="c-tabNav">
    <router-link class="u-tab" active-class="f-selected" to='/news'>
      <img :src="require('../assets/news.png')" class="u-img f-normal"/>
      <img :src="require('../assets/news_s.png')" class="u-img f-selected"/>
      <span class="u-text">WEEKLY</span>
    </router-link>
    <router-link class="u-tab" active-class="f-selected" to='/acts'>
      <img :src="require('../assets/activities.png')" class="u-img f-normal"/>
      <img :src="require('../assets/activities_s.png')" class="u-img f-selected"/>
      <span class="u-text">ACTIVITIES</span>
    </router-link>
    <router-link class="u-tab" active-class="f-selected" to='/more'>
      <img :src="require('../assets/more.png')" class="u-img f-normal"/>
      <img :src="require('../assets/more_s.png')" class="u-img f-selected"/>
      <span class="u-text">MORE</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabNav',
}
</script>
<style scoped lang="scss">
.c-tabNav {
  display: flex;
  position: relative;
  background: white;
  z-index: 33;
  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: 1px;
    transform: scaleY(.5);
    background-color: #d6d6d6;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
}
.u-tab {
  font-size: .26rem;
  height: 1.1rem;
  flex: 1;
  display: block;
  color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0;
  .f-normal {
    display: block;
  }
  .f-selected {
    display: none;
  }
  .u-img {
    width: .41rem;
    height: .41rem;
    margin-bottom: .04rem;
  }
  .u-text {
    font-size: .26rem;
    line-height: 1.1;
  }
  &.f-selected {
    color: #cd1010;
    .f-normal {
      display: none;
    }
    .f-selected {
      display: block;
    }
  }
}
</style>
