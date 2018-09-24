<template>
  <div class="p-actSubmit">
    <div class="m-main">
      <InputGroup title="NAME*" />
      <InputGroup title="PHONE*" />
      <InputGroup title="WECHAT*" />
      <InputGroup title="EMAIL*" />
    </div>
    <BottomButton>
      <a href="javascript:;" class="u-submit">CONFIRM</a>
    </BottomButton>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomButton from '@/components/BottomButton'
import InputGroup from '@/components/InputGroup'
export default {
  name: 'ActSubmit',
  components: {
    BottomButton, InputGroup
  }
}
</script>
<style lang="scss" scoped>
.p-actSubmit {
  min-height: 100vh;
  min-width: 100vw;
  background: white;
  padding: .1rem .5rem .9rem;
  box-sizing: border-box;
  .u-submit {
    height: .9rem;
    line-height: .9rem;
    color: white;
    display: block;
  }
}
</style>
