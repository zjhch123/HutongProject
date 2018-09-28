<template>
  <div class="c-textarea-group" :style="styles">
    <div class="u-tlt">
      <span class="tlt">{{title}}</span>
    </div>
    <div class="u-input">
      <div class="item" >
        <textarea type="text" class="input" @input="handleInput" v-model="inputValue" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextareaGroup',
  props: {
    styles: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    title: {
      type: String,
      required: true
    },
    value: String,
  },
  watch: {
    value(newVal) {
      if (newVal === '') {
        this.inputValue = ''
      }
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.c-textarea-group {
  margin-top: .6rem;
  text-align: left;
  .u-tlt {
    width: 6.5rem;
    margin: auto;
  }
  .tlt {
    font-size: .3rem;
    color: #212121;
    font-weight: bold;
  }
  .item {
    width: 6.38rem;
    margin: .2rem auto 0;
    display: flex;
    justify-content: space-between;
    &.f-more {
      .input {
        width: 5.4rem;
      }
      .cut {
        display: block;
      }
    }
  }
  .input {
    width: 100%;
    height: 1.5rem;
    font-size: .26rem;
    border-radius: .06rem;
    display: block;
    background: #ededf2;
    border: 1px solid #ededf2;
    padding-left: .2rem;
    padding-top: .1rem;
    box-sizing: border-box;
    appearance: none;
    resize: none;
    -webkit-appearance: none;
    &:focus {
      background: white;
      outline: none;
    }
  }
}
</style>
