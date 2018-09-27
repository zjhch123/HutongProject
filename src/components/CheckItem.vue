<template>
  <a href="javascript:;" class="u-item" :class="selected ? 'f-selected' : ''" @click="handleClick">{{text}}</a>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    selected: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.onClick(this.text)
    }
  }
}
</script>
<style lang="scss" scoped>
.u-item {
  margin-top: .4rem;
  text-align: center;
  display: block;
  width: 3.05rem;
  height: .5rem;
  line-height: .5rem;
  box-sizing: border-box;
  border: 1px solid #717171;
  color: #595959;
  font-size: .28rem;
  border-radius: .08rem;
  &.f-selected {
    color: #c90000;
    border-color: #c90000;
  }
}
</style>
