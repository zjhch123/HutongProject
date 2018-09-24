<template>
  <router-link to="/act/1" class="c-activity">
    <div class="m-image">
      <img :src="require('@/assets/demo/swiper1.png')" class="u-img" />
    </div>
    <div class="m-info">
      <div class="u-tlt">
        <span>Visit HangZhou West Lake ！</span>
      </div>
      <div class="u-other">
        <img :src="require('@/assets/time.png')" class="icon" />
        <span class="time">9.30</span>
        <img :src="require('@/assets/position.png')" class="icon" />
        <span class="position">West Lake, HangZhou</span>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'Activity',
  props: {
  }
}
</script>
<style scoped lang="scss">
.c-activity {
  padding: 0 .37rem;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  margin-bottom: .31rem;
  display: block;
  &:after {
    content: '';
    left: .37rem;
    right: .37rem;
    bottom: 0;
    height: 1px;
    transform: scaleY(.5);
    background: #e6e6e6;
    position: absolute;
  }
  .m-image {
    width: 6.75rem;
    height: 3.8rem;
    border-radius: .16rem;
    overflow: hidden;
    .u-img {
      width: 6.75rem;
      height: 3.8rem;
      display: block;
    }
  }
  .m-info {
    padding: .2rem .18rem;
    box-sizing: border-box;
    .u-tlt {
      color: #292929;
      font-size: .3rem;
    }
    .u-other {
      color: #9b9b9b;
      font-size: .22rem;
      display: flex;
      align-items: center;
      .icon {
        display: block;
        margin-right: .1rem;
        background-repeat: no-repeat;
        height: .2rem;
      }
      .time {
        margin-right: .32rem;
      }
      .time, .position {
        margin-top: .04rem;
      }
    }
  }
}
</style>
