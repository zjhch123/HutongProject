<template>
  <div class="p-actDetail">
    <div class="m-main">
      <img v-if="!!content" :src="tlt" class="u-tlt"/>
      <img 
        v-if="!!content" 
        v-for="(item, index) in (content || '').split('|')" 
        :key="index" 
        :src="item" 
        class="u-act"
        :class="index == 0 ? 'f-first' : ''"/>
    </div>
    <div class="m-comment-list" v-if="false">
    <!-- <div class="m-comment-list" v-if="comments.length > 0"> -->
      <h2 class="u-subTlt">COMMENTS</h2>
      <div class="m-list">
        <ActivityComment v-for="(item, index) in comments" :key="index" :comment="item"/>
      </div>
    </div>
    <div class="m-post-comment" v-if="false">
      <h2 class="u-subTlt">ADD COMMENT</h2>
      <InputGroup title="NAME*" :styles="{'margin-top': '.14rem'}" v-model="form.name" />
      <TextareaGroup title="CONTENT*" :styles="{'margin-top': '.2rem'}" v-model="form.content" />
      <VerifyInputGroup 
        v-model="form.verifyCode" 
        :refresh="refreshVerifyCode"
        :verifyCodeURL='verifyUrl' />
      <div class="m-btn">
        <a href="javascript:;" class="u-btn" @click="submitForm">SUBMIT</a>
      </div>
    </div>
    <BottomButton :bgColor="closing === false ? '#cb0000' : '#9c9c9c'">
      <router-link v-if="closing === false" :to="`/act/${id}/submit`" class="u-submit">SIGN UP NOW</router-link>
      <a href="javascript:;" v-if="closing === true" class="u-submit f-close">Closing</a>
    </BottomButton>
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup'
import TextareaGroup from '@/components/TextareaGroup'
import ActivityComment from '@/components/ActivityComment'
import BottomButton from '@/components/BottomButton'
import VerifyInputGroup from '@/components/VerifyInputGroup'
import { getActDetail, comment, getComments } from '../../api'
export default {
  name: 'ActDetail',
  data() {
    return {
      id: 0,
      tlt: null,
      content: null,
      comments: [],
      verifyUrl: '/api/util/getVerifyCode',
      closing: false,
      form: {
        name: '',
        content: '',
        verifyCode: '',
      }
    }
  },
  mounted() {
    this.launch()
    this.getComments()
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
      const endTime = ret.content.submitEndTime
      this.content = detail.content
      this.tlt = ret.content.descImage
      this.closing = new Date(endTime).getTime() <= new Date().getTime()
      window.shareConfig = {
        title: detail.shareTitle,
        desc: detail.shareDesc,
        timeline_title: detail.shareTimeline,
        url: window.location.href,
        imagePath: 'http://' + window.location.host + detail.shareImage,
        successCb: () => {}
      }
      window.resetShareConfig()
    },
    refreshVerifyCode() {
      this.verifyUrl = `/api/util/getVerifyCode?id=${Math.random()}`
    },
    async getComments() {
      const ret = await getComments(this.id)
      this.comments = ret.content
    },
    async submitForm() {
      const submit = {
        ...this.form,
        actId: this.id,
      }
      if (submit.name === '' || submit.content === '' || submit.verifyCode === '') {
        this.$notify({
          message: 'Please fill in the required information',
          type: 'info'
        })
        return
      }

      const ret = await comment(submit)
      if (ret.code !== 200) {
        this.$notify({
          message: `System error`,
          type: 'warning'
        })
        return
      }

      if (ret.content === 0) {
        this.$notify({
          message: `Success! But your comment isn't shown until it is verified.`,
          type: 'success'
        });
        this.form = {
          name: '',
          content: '',
          verifyCode: '',
        }
        this.refreshVerifyCode()
        this.getComments()
      } else if (ret.content === -2) {
        this.$notify({
          message: `Verify Code Error`,
          type: 'warning'
        })
        this.refreshVerifyCode()
        this.form.verifyCode = ''
      }
    }
  },
  components: {
    BottomButton, InputGroup, TextareaGroup, ActivityComment, VerifyInputGroup
  }
}
</script>
<style lang="scss" scoped>
.p-actDetail {
  min-height: 100vh;
  background: white;
  box-sizing: border-box;
  .u-tlt {
    width: 7.5rem;
    display: block;
  }
  .u-act {
    position: relative;
    top: -.2rem;
    overflow: hidden;
    width: 7.5rem;
    display: block;
    &.f-first {
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
    }
  }
  .u-submit {
    height: .9rem;
    line-height: .9rem;
    color: white;
    display: block;
  }
}
.u-subTlt {
  font-size: .32rem;
}
.m-comment-list {
  .m-list {
    padding: .4rem 0;
    .u-none {
      font-size: .26rem;
      font-weight: lighter;
    }
  }
}
.m-post-comment {
  .m-btn {
    width: 6.4rem;
    margin: auto;
    padding: .3rem 0;
    display: flex;
    .u-btn {
      display: inline-block;
      width: 3.18rem;
      height: .7rem;
      line-height: .7rem;
      background: #CB0302;
      color: white;
      font-size: .3rem;
      font-weight: bold;
      border-radius: .04rem;
    }
    .u-verify {
      margin-left: .4rem;
      height: .7rem;
      display: block;
    }
  }
}
</style>
