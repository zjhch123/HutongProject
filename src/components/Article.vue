<template>
  <a :href="article.link" class="c-article">
    <div class="g-left">
      <a href="javascript:;" class="m-img">
        <img :src="article.descImage" class="u-img" />
      </a>
    </div>
    <div class="g-right">
      <div class="m-tlt">
        <span>{{article.title}}</span>
      </div>
      <div class="m-time">
        <span>{{ formatDate(article.posted_at) }}</span>
      </div>
    </div>
  </a>
</template>
<script>
import utils from '../lib/utils.js'
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
    }
  },
  methods: {
    formatDate(s) {
      return utils.formatDate(s)
    }
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
    width: 2.7rem;
    height: 1.5rem;
    overflow: hidden;
    position: relative;
    display: block;
    .u-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2.7rem;
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
