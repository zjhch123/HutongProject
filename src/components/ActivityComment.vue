<template>
  <div class="c-comment">
    <p class="name">{{comment.name}}&nbsp;&nbsp;<span class="time">{{formatDate(comment.created_at)}}</span></p>
    <div class="inner">
      <p class="content" v-for="(i, j) in (comment.content || '').split('\n')" :key="j">{{i}}</p>
    </div>
  </div>
</template>
<script>
import utils from '../lib/utils.js'
export default {
  name: 'Article',
  props: {
    comment: {
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
.c-comment {
  width: 6.4rem;
  margin: auto;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: .08rem;
  margin-bottom: .2rem;
  .name {
    font-size: .3rem;
    font-weight: bold;
  }
  .inner {
    padding: .2rem 0;
    .content {
      font-size: .26rem;
      line-height: 1.4;
    }
  }
  .time {
    font-size: .22rem;
    font-weight: normal;
    color: #9c9c9c;
  }
}
</style>
