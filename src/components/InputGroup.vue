<template>
  <div class="c-input-group">
    <div class="u-tlt">
      <span class="tlt">{{title}}</span>
    </div>
    <div class="u-input">
      <div class="item" :class="index > 0 ? 'f-more' : ''" v-for="(_, index) in inputValue" :key="index" >
        <input type="text" class="input" @input="handleInput" :data-index="index" v-model="inputValue[index]">
        <a href="javascript:;" class="cut" @click="handleCutInput(index)"></a>
      </div>
      <a v-if="canAdd" href="javascript:;" class="u-addInput" @click="addInput">+ ADD PARTNER</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputGroup',
  props: {
    title: {
      type: String,
      required: true
    },
    canAdd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: [''],
    }
  },
  methods: {
    handleInput(e) {
      const index = +e.target.getAttribute('data-index')
      this.inputValue[index] = e.target.value
      this.$emit('input', this.inputValue.join(', '))
    },
    addInput() {
      this.inputValue.push('')
    },
    handleCutInput(index) {
      if (index === 0) {
        return
      }
      this.inputValue = [
        ...this.inputValue.slice(0, index),
        ...this.inputValue.slice(index + 1)
      ]
      this.$emit('input', this.inputValue.join(', '))
    }
  }
}
</script>
<style lang="scss" scoped>
.c-input-group {
  margin-top: .6rem;
  text-align: left;
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
    height: .58rem;
    font-size: .26rem;
    border-radius: .06rem;
    display: block;
    background: #ededf2;
    border: 1px solid #ededf2;
    padding-left: .2rem;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    &:focus {
      background: white;
    }
  }
  .cut {
    width: .8rem;
    height: .58rem;
    background: url('../assets/cut.png');
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-position: center center;
    display: none;
  }
  .u-addInput {
    margin: .1rem 0 0;
    text-align: right;
    float: right;
    color: #9c9c9c;
    font-size: .26rem;
  }
}
</style>
