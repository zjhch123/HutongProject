<template>
  <div class="c-multiCheck">
    <div class="u-tlt">
      <span class="tlt">{{title}}</span>
    </div>
    <div class="m-checked">
      <CheckItem v-for="(item, index) in items" :key="index" :text="item" :selected="selected.indexOf(item) !== -1" :onClick="clickItem.bind(this)"/>
    </div>
  </div>
</template>
<script>
import CheckItem from '@/components/CheckItem'
export default {
  name: 'MultiCheck',
  data() {
    return {
      selected: [],
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickItem(item) {
      if (this.selected.indexOf(item) === -1) {
        this.selected.push(item)
      } else {
        const index = this.selected.indexOf(item)
        this.selected = [
          ...this.selected.slice(0, index),
          ...this.selected.slice(index + 1)
        ]
      }
      this.$emit('input', this.selected.join(', '))
    }
  },
  components: {
    CheckItem
  }
}
</script>
<style lang="scss" scoped>
.c-multiCheck {
  margin-top: .6rem;
  text-align: left;
  .f-hide {
    display: none;
  }
  .tlt {
    font-size: .3rem;
    color: #212121;
    font-weight: bold;
  }
  .m-checked {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .07rem;
    box-sizing: border-box;
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
  }
}
</style>
