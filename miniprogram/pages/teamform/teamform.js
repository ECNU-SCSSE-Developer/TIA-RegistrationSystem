//var myposition = 0;
Page({
  data: {
    id:'',
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },


  formSubmit: function (e) {
    var that = this;
    let {
      name,
      num,
      description,
      requirements
    } = e.detail.value;

    if (e.detail.value.name.length == 0) {
      wx.showModal({
        content: "请填写项目名称！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    }
    else if (e.detail.value.num.length == 0) {
      wx.showModal({
        content: "请填写学号信息！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    }
    /*  else if (e.myposition == 0) {
          wx.showModal({
            content: "请选择招募位置！",
            showCancel: false,
            confirmColor: "#557d8a",
            confirmText: "好的",
          })
         }
      */
    else if (e.detail.value.description.length == 0) {
      wx.showModal({
        content: "请填写项目简介！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    }
    else if (e.detail.value.requirements.length == 0) {
      wx.showModal({
        content: "请填写招募要求！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    } else {
      wx.request({
        url: 'https://scsse.me/tia/recruit',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'sessionid': wx.getStorageSync('sessionid')
        },
        data: {
          userId: num,
          recruitName: name,
          recruitDescription: description,
          recruitRequirements: requirements,
          matchId:that.data.id,
          studentId: wx.getStorageSync("studentId")
        }
      })
    }
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
  onUnload: function () { },

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