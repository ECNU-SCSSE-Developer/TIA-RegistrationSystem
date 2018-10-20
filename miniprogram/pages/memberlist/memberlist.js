// pages/memberlist/memberlist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    team: {
      "data": [{
        "id": 0,
        "name": "卢宇博你是狗吧",
        "major": "软件工程",
        "phonenumber": "123",
        "state":"录用"
      }, {
        "id": 1,
          "name": "我儿子贺慈硕",
          "major": "计科",
          "phonenumber": "456",
          "state": "未录用"
      }, {
        "id": 2,
          "name": "老孙",
          "major": "软件",
          "phonenumber": "789",
          "state": "录用"
      }]
    }
  },
  openConfirm: function (e) {
    var id = e.currentTarget.dataset.name;
    var that = this;
    var state = 'team.data['+id+'].state';
    wx.showModal({
      title: '录用',
      content: '修改该应聘者状态为',
      confirmText: "录用",
      cancelText: "未录用",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          that.setData({
              [state]:"录用"
          })
          console.log('用户点击确认')
        } else {
          that.setData({
            [state]: '未录用'
          })
          console.log('用户点击取消')
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})