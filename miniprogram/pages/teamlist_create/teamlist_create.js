// pages/myteam/myteam.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    team: {
      "data": [{
        "id": 0,
        "name": "scsse",
        "number": "待招3人",
        "match": "智慧校园"
      }, {
        "id": 1,
        "name": "coder",
        "number": "待招5人",
        "match": "科创培育项目"
      }, {
        "id": 2,
        "name": "嘻哈小组",
        "number": "待招1人",
        "match": "智慧校园"
      }]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      id:options.id
    })
    wx.request({
      url: 'https://scsse.me/tia/user/created',
      data:{
        'studentId': that.data.id,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function (res) {
        console.log('获得比赛信息：' + res.data);
        that.setData({
          match: res.data,
        })
      },
      fail: function (res) {
        console.log("Sorry,please try again!")
      }
    })
    wx.request({
      url: 'https://scsse.me/tia/recruitment/recruit',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      data: {
        "studentId": options.studentId
      },
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

  },
})