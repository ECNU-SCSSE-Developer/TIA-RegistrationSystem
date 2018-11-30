// pages/teamform_filter/teamform_filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    team: [],
    student: [],
    apply:'',
    focused:'',
    apply:'应       聘'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id
    })
    var that = this;
    wx.request({
      url: 'https://scsse.me/tia/recruit',
      data: {
        "recruitId": that.data.id
      },
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function(res) {
        console.log('recruitinfo: ' + res.data);
        that.setData({
          team: res.data,
        })
        wx.request({
          url: 'https://scsse.me/tia/user',
          data: {
            "studentId": that.data.team.studentId
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
    wx.request({
      url: 'https://scsse.me/tia/user/focused',
      data: {
        "studentId": wx.getStorageSync('sessionid'),
      },
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function(res) {
        console.log('personal info: ' + res.data);
        
        for(var i in res.data)
        {
          if(i.recuritId == that.data.id)
          {
              focused: '关注';
              break;
          }
          else
          {
            focused: '取消关注';
          }
        }
      },
      fail: function(res) {
        console.log("Sorry,please try again!")
      }
    })
  },
  attention:function(){
    var that = this;
    wx.request({
      url: 'https://scsse.me/tia/user/focused',
      data: {
        "studentId": wx.getStorageSync('sessionid'),
        "recruitId": that.data.team.recruitId
      },
      method: 'PUT',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function (res) {
        console.log('personal info: ' + res.data);
        that.setData({
          student: res.data,
        })
      },
      fail: function (res) {
        console.log("Sorry,please try again!")
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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