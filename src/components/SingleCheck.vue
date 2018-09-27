<template>
  <div class="c-singleCheck">
    <div class="u-tlt">
      <span class="tlt">{{title}}</span>
    </div>
    <div class="m-checked">
      <CheckItem 
        v-for="(item, index) in items" 
        :key="index" 
        :text="item" 
        :onClick="clickItem.bind(this)"
        :selected="selected === item"
      />
    </div>
  </div>
</template>
<script>
import CheckItem from '@/components/CheckItem'
export default {
  name: 'SingleCheck',
  data() {
    return {
      selected: '',
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
      if (this.selected === item) {
        this.selected = ''
        this.$emit('input', this.selected)
        return
      }
      this.selected = item
      this.$emit('input', this.selected)
    }
  },
  components: {
    CheckItem
  }
}
</script>
<style lang="scss" scoped>
.c-singleCheck {
  margin-top: .6rem;
  text-align: left;
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
  }
}
</style>
