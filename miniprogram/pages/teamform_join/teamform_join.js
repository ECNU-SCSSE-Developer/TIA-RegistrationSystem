// pages/teamform_join/teamform_join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  /*onLoad: function(options) {
    var that = this;
    this.setData({
        id: options.id
      }),
      wx.request({
          url: 'https://scsse.me/tia/recruitment/recruit',
          data: {
            "studentId": wx.getStorageSync('studentId'),
            "recruitId": id,
            "selectall": 0,
          },
          method: 'GET',
          header: {
            'content-type': 'application/json;charset=utf-8',
            'sessionid': wx.getStorageSync('sessionid')
          },
          success: function(res) {
            console.log('personal info: ' + res.data);
            that.setData({
              team: res.data,
            })
            wx.request({
              url: 'https://scsse.me/tia/user',
              data: {
                "studentId": that.studentId
              },
              method: 'GET',
              header: {
                'content-type': 'application/json;charset=utf-8',
                'sessionid': wx.getStorageSync('sessionid')
              },
              success: function(res) {
                console.log('personal info: ' + res.data);
                that.setData({
                  student: res.data,
                })
              },
              fail: function(res) {
                console.log("Sorry,getting leader's name failed,please try again!")
              }
            })
          },
        fail: function(res) {
          console.log("Sorry,please try again!")
        }
      })
  },*/

/**
 * 生命周期函数--监听页面初次渲染完成
 */
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id
    }),
      wx.request({
        url: 'https://scsse.me/tia/recruit',
        data: {
          "recruitId": that.data.id,
        },
        method: 'GET',
        header: {
          'content-type': 'application/json;charset=utf-8',
          'sessionid': wx.getStorageSync('sessionid')
        },
        success: function (res) {
          console.log('recruitment info: ' + res.data);
          that.setData({
            team: res.data
          })
          wx.request({
            url: 'https://scsse.me/tia/user',
            data: {
              "studentId": that.data.team.studentId,
            },
            method: 'GET',
            header: {
              'content-type': 'application/json;charset=utf-8',
              'sessionid': wx.getStorageSync('sessionid')
            },
            success: function (res) {
              console.log('captain info: ' + res.data);
              that.setData({
                captain: res.data
              })
            },
            fail: function (res) {
              console.log("Sorry,please try again!")
            }
          })
        },
        fail: function (res) {
          console.log("Sorry,please try again!")
        }
      })
  },
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})