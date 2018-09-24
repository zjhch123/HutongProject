<template>
  <div class="c-input-group">
    <div class="u-tlt">
      <span class="tlt">{{title}}</span>
    </div>
    <div class="u-input">
      <input type="text" class="input">
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
  .input {
    width: 6.38rem;
    height: .58rem;
    font-size: .26rem;
    border-radius: .06rem;
    display: block;
    background: #ededf2;
    border: 1px solid #ededf2;
    margin: .2rem auto 0;
    padding-left: .2rem;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    &:focus {
      background: white;
    }
  }
}
</style>
