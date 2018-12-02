// pages/matchlist/matchlist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    caseList: [{
        message: 'foo'
      },
      {
        message: 'bar'
      }
    ],
    dropDownMenuTitle: ['条件筛选'],
    dropDownMenuFirstData: [{
        id: 1,
        title: '按比赛',
        childModel: []
      },
      {
        id: 2,
        title: '按招募职位',
        childModel: []
      },
      {
        id: 3,
        title: '显示全部',
        childModel: []
      },
    ],
    shaiOrNot: 0,
    team: {},
    match: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (that.data.shaiOrNot == 0) {
      wx.request({
        url: 'https://scsse.me/tia/recruit',
        data: {
          "selectAll": 1
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
        },
        fail: function(res) {
          console.log("Sorry,please try again!")
        }
      })
    }
    wx.request({
      url: 'https://scsse.me/tia/match',
      data: {
        "selectAll": 1
      },
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function(res) {
        console.log('获得比赛列表：' + res.data);
        that.setData({
          match: res.data,
        })
        var j = 11;
        var index = 0;
        for (var i in res.data) {
          var item = "dropDownMenuFirstData[0].childModel[" + index + "]";
          console.info(i)
          that.setData({
            [item]: {
              id: j,
              title: res.data[i].matchName
            }
          })
          console.info(that.data.dropDownMenuFirstData[0].childModel[index])
          j++
          index++
        }
      },
      fail: function(res) {
        console.log("Sorry,please try again!")
      }
    })
    wx.request({
      url: 'https://scsse.me/tia/allType',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function(res) {
        console.log('获得招聘类型列表：' + res.data);
        that.setData({
          recruitType: res.data,
        })
        var j = 21;
        var index = 0;
        for (var i in res.data) {
          var item = "dropDownMenuFirstData[1].childModel[" + index + "]";
          console.info(i)
          that.setData({
            [item]: {
              id: j,
              title: res.data[i]
            }
          })

          j++
          index++
        }
      },
      fail: function(res) {
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

  },
  selectedFourth: function(e) {
    var that = this;
    console.log("选中第" + e.detail.index + "个标签，选中的id：" + e.detail.selectedId + "；选中的内容：" + e.detail.selectedTitle);

    if (e.detail.selectedId >= 20) {
      var index = parseInt(e.detail.selectedId) - 21;
      console.info("1")
      wx.request({
        url: 'https://scsse.me/tia/typedRecruit',
        data: {
          "recruitType": that.data.dropDownMenuFirstData[1].childModel[index].title
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
            shaiOrNot: 1
          })
          wx.navigateTo({
            url: '../teamlist_filter/teamlist_filter',
          })

        },
        fail: function(res) {
          console.log("Sorry,please try again!")
        }
      })
    } else if (e.detail.selectedId == 3) {
      console.info("2")
      that.data.shaiOrNot == 0;
      wx.request({
        url: 'https://scsse.me/tia/recruit',
        data: {
          "selectAll": 1
        },
        method: 'GET',
        header: {
          'content-type': 'application/json;charset=utf-8',
          'sessionid': wx.getStorageSync('sessionid')
        },
        success: function (res) {
          console.log('personal info: ' + res.data);
          that.setData({
            team: res.data,
          })
        },
        fail: function (res) {
          console.log("Sorry,please try again!")
        }
      })
      wx.navigateTo({
        url: '../teamlist_filter/teamlist_filter',
      })
    } else {
      console.info("3")
      var index = parseInt(e.detail.selectedId) - 11;
      wx.request({
        url: 'https://scsse.me/tia/recruit/match',
        data: {
          "matchName": e.detail.selectedTitle
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
            shaiOrNot: 1
          })
          wx.navigateTo({
            url: '../teamlist_filter/teamlist_filter',
          })

        },
        fail: function(res) {
          console.log("Sorry,please try again!")
        }
      })
    }
  },
  showDialog: function(e) {

  },
  //取消事件
  _cancelEvent: function(e) {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent: function(e) {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})