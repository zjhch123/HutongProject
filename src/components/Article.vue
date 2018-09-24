<template>
  <div class="c-article">
    <div class="g-left">
      <a href="javascript:;" class="m-img">
        <img :src="require('@/assets/demo/swiper1.png')" class="u-img" />
      </a>
    </div>
    <div class="g-right">
      <div class="m-tlt">
        <span>Netease 6.18, Beautiful Life you me it.Beautiful Life you me it.Beautiful Life you me it.Beautiful Life you me it.</span>
      </div>
      <div class="m-time">
        <span>16:30</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
  }
}
</script>
<style scoped lang="scss">
.c-article {
  padding: .28rem .31rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
  &:after {
    content: '';
    left: .31rem;
    right: .31rem;
    bottom: 0;
    height: 1px;
    transform: scaleY(.5);
    background: #e6e6e6;
    position: absolute;
  }
  .g-right {
    height: 1.5rem;
    padding: 0 .25rem;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .m-img {
    .u-img {
      width: 2.7rem;
      height: 1.5rem;
      display: block;
    }
  }
  .m-tlt {
    flex: 1;
    font-size: .26rem;
    color: #292929;
    & > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 1.1rem;
    }
  }
  .m-time {
    height: .3rem;
    color: #9b9b9b;
    font-size: .24rem;
  }
}
</style>
