var position = "";
var index = 0;

Page({
  data: {
    matchId:'',
    array: ['请选择招募位置', 'java后端', 'web前端','小程序前端','python'],
    index_position: 0,
    objectArray: [{
        id: 0,
        name: 'java后端'
      },
      {
        id: 1,
        name: 'web前端'
      },
      {
        id:2,
        name:'小程序前端'
      },
      {
        id:3,
        name:'python'
      }
    ],
  },
  bindCasePickerChange_position: function(e) {
    if (e.detail.value == 4) {
      position = this.data.objectArray[3].name;
      index = this.data.objectArray[3].id;
    }
    if (e.detail.value == 3) {
      position = this.data.objectArray[2].name;
      index = this.data.objectArray[2].id;
    }
    if (e.detail.value == 2) {
      position = this.data.objectArray[1].name;
      index = this.data.objectArray[1].id;
    }
    if (e.detail.value == 1) {
      position = this.data.objectArray[0].name;
      index = this.data.objectArray[0].id;
    }
    this.setData({
      index_position: e.detail.value
    })
  },

  formSubmit: function(e) {
    var that = this;
    let {
      name,
      description,
      requirements,
    } = e.detail.value;
    let myposition = position;
    if (e.detail.value.name.length == 0) {
      wx.showModal({
        content: "请填写项目名称！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    } 
    else if (position == "") {
      wx.showModal({
        content: "请选择招募位置！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      })
    } else if (e.detail.value.description.length == 0) {
      wx.showModal({
        content: "请填写项目简介！",
        showCancel: false,
        confirmColor: "#557d8a",
        confirmText: "好的",
      });
    } else if (e.detail.value.requirements.length == 0) {
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
          'content-type': 'application/json;charset=utf-8',
          'sessionid': wx.getStorageSync('sessionid')
        },
        data: {
          "studentId":wx.getStorageSync("studentId"),
          "recruitName": name,
          "recruitDescription": description,
          "recruitRequirements": requirements,
          "recruitPosition": myposition,
          "matchId": that.data.matchId
        },
        success: function() {
          console.info("userID:" + e.detail.value.num);
          wx.setStorageSync("userId", e.detail.value.num);
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function() {
            wx.switchTab({
              url: "/pages/matchlist/matchlist"
            });
          }, 1000)
        },
        fail: function() {
          console.log("please try again");
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      matchId: options.id
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
  onUnload: function() {},

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