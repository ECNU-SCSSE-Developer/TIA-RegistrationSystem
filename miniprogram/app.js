//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    let sessionid = wx.getStorageSync('sessionid')
    if (sessionid) {
      //存有sessionid，判断登录态是否过期
      wx.checkSession({
        success: function(res) {
          console.info("登录态未过期")
          console.info("sessionid为: " + sessionid)
        },
        fail: function(res) {
          console.info("登录态已过期")
          //重新请求sessionid
          wx.login({
            success: res => {
              var code = res.code;
              console.log('重新获取用户登录凭证：' + code);
              if (code) {

                // --------- 发送凭证 ------------------
                wx.request({
                  url: 'https://scsse.cn/onLogin',
                  data: {
                    code: code
                  },
                  method: 'GET',
                  success: function(res) {
                    console.log(res.data.sessionid)
                    wx.setStorageSync("sessionid", res.data.sessionid)
                  },
                  fail: function(err) {
                    console.log("请求sessionid失败")
                  }
                })
              } else {
                console.log('获取code失败：' + res.errMsg);
              }
            }
          })
        }
      })
    } else {
      //首次登录
      wx.checkSession({
        success: function (res) {
          console.info("登录态未过期")
        },
        fail: function (res) {
          console.info("登录态已过期")
          //重新请求sessionid
          wx.login({
            success: res => {
              var code = res.code;
              console.log('获取用户登录凭证：' + code);
              if (code) {

                // --------- 发送凭证 ------------------
                wx.request({
                  url: 'https://scsse.cn/onLogin',
                  data: {
                    code: code
                  },
                  method: 'GET',
                  success: function (res) {
                    console.log("获取的sessionid为: " + res.data.sessionid)
                    wx.setStorageSync("sessionid", res.data.sessionid)
                  },
                  fail: function (err) {
                    console.log("请求sessionid失败")
                  }
                })
              } else {
                console.log('获取code失败：' + res.errMsg);
              }
            }
          })
        }
      })
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})