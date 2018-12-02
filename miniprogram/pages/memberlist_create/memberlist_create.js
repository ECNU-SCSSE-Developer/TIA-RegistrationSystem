// pages/memberlist/memberlist.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    /*
        team: {
          "data": [{
            "id": 0,
            "name": "卢宇博你是狗吧",
            "major": "软件工程",
            "phonenumber": "123",
            "state": "录用"
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
        }*/
  },
  /**
   * 生命期函数--监听页面加载
   */
  onLoad: function(options) {
    var that1 = this;
    this.setData({
      id: options.id
    })
    wx.request({
      url: 'https://scsse.me/tia/applicant',
      data: {
        "recruitId": that1.data.id
      },
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8',
        'sessionid': wx.getStorageSync('sessionid')
      },
      success: function(res) {
        console.log('获得比赛信息：' + res.data);
        that1.setData({
          applicants: res.data,
        });
        console.info(that1.data.applicants)
       /* for (var i in that1.data.applicants) {
          var that2 = that1
          wx.request({
            url: 'https://scsse.me/tia/user/registered',
            data: {
              "studentId": that2.data.applicants[i].studentId
            },
            method: 'GET',
            header: {
              'content-type': 'application/json;charset=utf-8',
              'sessionid': wx.getStorageSync('sessionid')
            },
            success: function(res) {
              console.log('获得比赛信息：' + res.data);
              that2.setData({
                registered: res.data,
              });
              if (that2.data.registered == null) {
                var state = "applicants[" + i + "].state"
                that2.setData({
                  [state]: "未录用",
                })
                console.log('1：' + res.data);
              } else {
                for (var k in that2.data.registered) {
                  if (that2.data.registered[k].recruitId == that2.data.id) {
                    var state = "applicants[" + i + "].state"
                    that2.setData({
                      [state]: "录用",
                    })
                    console.log('2：' + res.data);
                    break
                  } else {
                    var state = "applicants[" + i + "].state"
                    that2.setData({
                      [state]: "未录用",
                    })
                    console.log('3：' + res.data);
                  }
                }
              }
              console.info(that2.data.applicants)
            },
            fail: function(res) {
              console.log("Sorry,please try again!")
            }
          })
        }*/
      },
      fail: function(res) {
        console.log("Sorry,please try again!")
      }
    })

  },
  openConfirm: function(e) {
    console.info(e.currentTarget.dataset.name)
    var id = e.currentTarget.dataset.name;
    var state = 'team.data[' + id + '].state';
    wx.showModal({
      title: '录用',
      content: '修改该应聘者状态为',
      confirmText: "录用",
      cancelText: "未录用",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          that.setData({
            [state]: "录用"
          })
          wx.request({
            url: 'https://scsse.me/tia/registered',
            method: 'PUT',
            header: {
              'sessionid': wx.getStorageSync('sessionid')
            },
            data: {
              'applicantId': that.studentId,
              'recruitId': that.data.id
            },
          })
          console.log('用户点击确认')
        } else {
          that.setData({
            [state]: '未录用'
          })
          wx.request({
            url: 'https://scsse.me/tia/registered',
            method: 'DELETE',
            header: {
              'sessionid': wx.getStorageSync('sessionid')
            },
            data: {
              'studentId': res.studentId,
              'recruitId': res.recruitId,
            },
          })
          console.log('用户点击取消')
        }
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