<template>
  <div class="p-actSubmit">
    <div class="m-main">
      <InputGroup v-model="mainData.name" title="NAME*" :canAdd="true" />
      <InputGroup v-model="mainData.phone" title="PHONE*" />
      <!-- <InputGroup v-model="mainData.wechat" title="WECHAT*" />
      <InputGroup v-model="mainData.email" title="EMAIL*" /> -->
      <div v-for="(item, index) in submitConfig" :key="index">
        <InputGroup v-model="otherData[index]" v-if="item.type === 'input'" :title="`${item.title}${item.must === '1' ? '*' : ''}`" />
        <MultiCheck v-model="otherData[index]" v-if="item.type === 'multicheck'" :title="`${item.title}${item.must === '1' ? '*' : ''}`" :items="item.items" />
        <SingleCheck v-model="otherData[index]" v-if="item.type === 'singlecheck'" :title="`${item.title}${item.must === '1' ? '*' : ''}`" :items="item.items" />
      </div>
      <VerifyInputGroup 
        v-model="mainData.verifyCode" 
        :refresh="refreshVerifyCode"
        :verifyCodeURL='verifyUrl' />
    </div>
    <BottomButton :showBack="false">
      <a href="javascript:;" class="u-submit" @click="this.confirm">CONFIRM</a>
    </BottomButton>
  </div>
</template>
<script>
import BottomButton from '@/components/BottomButton'
import InputGroup from '@/components/InputGroup'
import MultiCheck from '@/components/MultiCheck'
import SingleCheck from '@/components/SingleCheck'
import VerifyInputGroup from '@/components/VerifyInputGroup'
import { getActDetail, submitAct } from '../../api'
export default {
  name: 'ActSubmit',
  data() {
    return {
      content: {},
      verifyUrl: '/api/util/getVerifyCode',
      submitConfig: [],
      mainData: {
        name: '',
        phone: '',
        // wechat: '',
        // email: '',
        verifyCode: ''
      },
      otherData: [],
      isConfirming: false,
    }
  },
  components: {
    BottomButton, InputGroup, MultiCheck, SingleCheck, VerifyInputGroup
  },
  mounted() {
    this.launch()
    this.refreshVerifyCode()
  },
  methods: {
    async launch() {
      this.id = this.$route.params.id
      const ret = await getActDetail(this.id)
      if (ret.code !== 200) {
        // TODO error
      }
      const detail = ret.content.ActivityDetail
      const submitConfig = JSON.parse(detail.config)
      this.content = detail.content
      this.otherData = new Array(submitConfig.length)
      this.otherData.fill('')
      this.submitConfig = submitConfig

      window.shareConfig = {
        title: detail.shareTitle,
        desc: detail.shareDesc,
        timeline_title: detail.shareTimeline,
        url: window.location.href.split('#')[0] + `#/act/${this.id}`,
        imagePath: 'http://' + window.location.host + detail.shareImage,
        successCb: () => {}
      }
      window.resetShareConfig()
    },
    refreshVerifyCode() {
      this.verifyUrl = '/api/util/getVerifyCode?id=' + Math.random();
    },
    setIsConfirming() {
      this.isConfirming = true
      setTimeout(() => {
        this.isConfirming = false
      }, 2000)
    },
    async confirm() {
      if (this.isConfirming) {
        return
      }
      this.setIsConfirming()
      let flag = false
      if (this.mainData.name === '') {
        flag = true
      }
      if (this.mainData.phone === '') {
        flag = true
      }
      if (this.mainData.verifyCode === '') {
        flag = true
      }
      this.submitConfig.forEach((item, index) => {
        if (item.must === '1' && (this.otherData[index] === '' || this.otherData[index].length === 0)) {
          flag = true
          return false
        }
      })
      if (flag) {
        this.$notify({
          message: `Please fill in the required information`,
          type: 'info'
        })
        return
      }

      // 以上是检验输入

      const submit = {
        id: this.id, 
        ...this.mainData,
        other: [],
      }

      this.submitConfig.forEach((item, index) => {
        submit.other.push({
          key: item.title,
          value: this.otherData[index]
        })
      })

      // 以上是拼接提交参数

      const ret = await submitAct(submit)
      if (ret.code !== 200) {
        // TODO error
      }
      const content = ret.content

      if (content.result === 0) {
        this.$router.push({
          name: 'ActSubmitSubmit'
        })
        return
      }
      switch (content.result) {
        case -1:
          this.$notify({
            message: 'Unknown act id',
            type: 'danger'
          })
          break;
        case -2:
          this.$notify({
            message: `You have already registerred`,
            type: 'info'
          })
          break;
        case -3:
          this.$notify({
            message: `Registration has closed`,
            type: 'info'
          })
          break;
        case -4:
          this.$notify({
            message: `Verify Code Error`,
            type: 'warning'
          })
          this.mainData.verifyCode = ''
          this.refreshVerifyCode()
          break;
        default:
          this.$notify({
            message: `System error`,
            type: 'danger'
          })
          break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.p-actSubmit {
  min-height: 100vh;
  background: white;
  padding: .1rem .5rem .5rem;
  box-sizing: border-box;
  .u-submit {
    height: .9rem;
    line-height: .9rem;
    color: white;
    display: block;
  }
  .u-verifyCode {
    height: .8rem;
    display: block;
  }
}
</style>
