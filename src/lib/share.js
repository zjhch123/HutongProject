class Wechat {
  constructor() {
    window.setDetaultShareConfig = this.setDetaultShareConfig.bind(this)
    window.resetShareConfig = this.resetShareConfig.bind(this)
  }

  setDetaultShareConfig() {
    window.shareConfig = {
      title: 'Hutong School Hangzhou',
      desc: 'Welcome to Hangzhou',
      timeline_title: 'Hutong School Hangzhou',
      imagePath: `http://${window.location.host}/upload/1.jpg`,
      url: window.location.href.split('#')[0],
    }
    window.resetShareConfig()
  }

  resetShareConfig() {
    window.wx.onMenuShareTimeline({
      title: window.shareConfig.timeline_title,
      link: window.shareConfig.url,
      imgUrl: window.shareConfig.imagePath,
      success: window.shareConfig.successCb,
    });
    window.wx.onMenuShareAppMessage({
      title: window.shareConfig.title,
      desc: window.shareConfig.desc,
      link: window.shareConfig.url,
      imgUrl: window.shareConfig.imagePath,
      type: 'link',
      dataUrl: '',
      success: window.shareConfig.successCb,
    });
  }

  launch() {
    fetch(`/api/wechat/getWebSign?url=${encodeURIComponent(window.location.href.split('#')[0])}`)
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          this.wxconfig(res.content)
        } else {
          console.error(res)
        }
      })
  }

  wxconfig({
    timestamp,
    nonceStr,
    appId,
    signature,
  }) {
    window.wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems'] // 必填，需要使用的JS接口列表
    });
    window.wx.ready(() => {
      window.wx.hideMenuItems({
        menuList: [
          "menuItem:share:qq",
          "menuItem:share:weiboApp",
          "menuItem:share:facebook",
          "menuItem:share:QZone",
          "menuItem:copyUrl",
          "menuItem:originPage",
          "menuItem:readMode",
          "menuItem:share:email"
        ]
      });
      this.resetShareConfig(window.shareConfig)
    })
  }
}

export default new Wechat();