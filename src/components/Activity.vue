<template>
  <router-link :to="`/act/${activity.id}`" class="c-activity">
    <div class="m-image">
      <img :src="activity.descImage" class="u-img" />
    </div>
    <div class="m-info">
      <div class="u-tlt">
        <span>{{activity.title}}</span>
      </div>
      <div class="u-other">
        <img :src="require('@/assets/time.png')" class="icon" />
        <span class="time">{{activity.startTime}}</span>
        <img :src="require('@/assets/position.png')" class="icon" />
        <span class="position">{{activity.position}}</span>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'Activity',
  props: {
    activity: {
      type: Object
    }
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
    position: relative;
    .u-img {
      width: 6.75rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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
