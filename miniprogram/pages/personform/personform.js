var major = 0;
var year = 0;
var index1 = 0;
var index2 = 0;
Page
  ({
    /**
     * 页面的初始数据
     */
    data: {
      contacts_split: ['123', '456'],
      major_local: '',
      grade_local: '',
      array1: ['请选择专业', '软件工程', '计算机科学', '心理学', '设计', '教育', '经管'],
      index_major: 0,
      objectArray1: [{
        id: 0,
        name: '软件工程'
      }, {
        id: 1,
        name: '计算机科学'
      }, {
        id: 2,
        name: '心理学'
      }, {
        id: 3,
        name: '设计'
      }, {
        id: 4,
        name: '教育'
      }, {
        id: 5,
        name: '经管'
      }],

      array2: ['请选择年级', '大一', '大二', '大三', '大四', '研一', '研二', '研三', '博士生'],
      index_year: 0,
      objectArray2: [{
        id: 0,
        name: '大一'
      }, {
        id: 1,
        name: '大二'
      }, {
        id: 2,
        name: '大三'
      }, {
        id: 3,
        name: '大四'
      }, {
        id: 4,
        name: '研一'
      }, {
        id: 5,
        name: '研二'
      }, {
        id: 6,
        name: '研三'
      }, {
        id: 7,
        name: '博士生'
      }],
    },
    bindCasePickerChange_major: function(e) {
      if (e.detail.value == 6) {
        major = this.data.objectArray1[6].name;
        index1 = this.data.objectArray1[6].id;
      }
      if (e.detail.value == 5) {
        major = this.data.objectArray1[5].name;
        index1 = this.data.objectArray1[5].id;
      }
      if (e.detail.value == 4) {
        major = this.data.objectArray1[4].name;
        index1 = this.data.objectArray1[4].id;
      }
      if (e.detail.value == 3) {
        major = this.data.objectArray1[3].name;
        index1 = this.data.objectArray1[3].id;
      }
      if (e.detail.value == 2) {
        major = this.data.objectArray1[2].name;
        index1 = this.data.objectArray1[2].id;
      }
      if (e.detail.value == 1) {
        major = this.data.objectArray1[1].name;
        index1 = this.data.objectArray1[1].id;
      }
      if (e.detail.value == 0) {
        major = this.data.objectArray1[0].name;
        index1 = this.data.objectArray1[0].id;
      }
      this.setData({
        index_major: e.detail.value
      })

    },
    bindCasePickerChange_year: function(e) {
      if (e.detail.value == 9) {
        year = this.data.objectArray2[9].name;
        index2 = this.data.objectArray2[9].id;
      }
      if (e.detail.value == 8) {
        year = this.data.objectArray2[8].name;
        index2 = this.data.objectArray2[8].id;
      }
      if (e.detail.value == 7) {
        year = this.data.objectArray2[7].name;
        index2 = this.data.objectArray2[7].id;
      }
      if (e.detail.value == 6) {
        year = this.data.objectArray2[6].name;
        index2 = this.data.objectArray2[6].id;
      }
      if (e.detail.value == 5) {
        year = this.data.objectArray2[5].name;
        index2 = this.data.objectArray2[5].id;
      }
      if (e.detail.value == 4) {
        year = this.data.objectArray2[4].name;
        index2 = this.data.objectArray2[4].id;
      }
      if (e.detail.value == 3) {
        year = this.data.objectArray2[3].name;
        index2 = this.data.objectArray2[3].id;
      }
      if (e.detail.value == 2) {
        year = this.data.objectArray2[2].name;
        index2 = this.data.objectArray2[2].id;
      }
      if (e.detail.value == 1) {
        year = this.data.objectArray2[1].name;
        index2 = this.data.objectArray2[1].id;
      }
      if (e.detail.value == 0) {
        year = this.data.objectArray2[0].name;
        index2 = this.data.objectArray2[0].id;
      }
      this.setData({
        index_year: e.detail.value
      })
    },
    formSubmit: function(e) {
      var that = this;
      let {
        name,
        num,
        phone,
        email,
        skill
      } = e.detail.value;
      let mymajor = index1;
      let myyear = index2;
      if (e.detail.value.name.length == 0) {
        wx.showModal({
          content: "姓名不能为空！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.detail.value.num.length == 0) {
        wx.showModal({
          content: "学号不能为空！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.detail.value.phone.length == 0) {
        wx.showModal({
          content: "电话不能为空！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.detail.value.email.length == 0) {
        wx.showModal({
          content: "邮箱不能为空！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.detail.value.skill.length == 0) {
        wx.showModal({
          content: "个人特长不能为空！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.mymajor == 0) {
        wx.showModal({
          content: "请选择专业！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else if (e.myyear == 0) {
        wx.showModal({
          content: "请选择年级！",
          showCancel: false,
          confirmColor: "#557d8a",
          confirmText: "好的",
        });
      } else {
        wx.request({
          url: 'https://scsse.me/tia/user',
          data: {
            "studentId": num,
            "studentName": name,
            "grade": myyear,
            "major": mymajor,
            "contacts": phone + ';' + email,
            "specialty": skill,
            "openId": "123"
          },
          method: 'POST',
          header: {
            'content-type': 'application/json',
            'sessionid': wx.getStorageSync('sessionid')
          },
          success: function() {
            console.info("studentID:" + e.detail.value.num);
            wx.setStorageSync("studentId", e.detail.value.num);
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              duration: 1000
            });
            setTimeout(function() {
              wx.switchTab({
                url: "/pages/mine/mine"
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
      var that = this;
      let studentId = wx.getStorageSync('studentId');
      if (studentId) {
        wx.request({
          url: 'https://scsse.me/tia/user',
          method: 'GET',
          data: {
            "studentId": studentId,
          },
          header: {
            'content-type': 'application/json',
            'sessionid': wx.getStorageSync('sessionid')
          },
          success: function(res) {
            that.setData({
              personalinfo: res.data,
              contacts_split: res.data.contacts.split(";")
            })
            if (res.data.major == "0") {
              that.setData ({
                index_major : 0
              })
            } else if (res.data.major == "1") {
              that.setData ({
                index_major: 1
              })
            } else if (res.data.major == "2") {
              that.setData ({
                index_major: 2
              })
            } else if (res.data.major == "3") {
              that.setData ({
                index_major: 3
              })
            } else if (res.data.major == "4") {
              that.setData ({
                index_major: 4
              })
            } else if (res.data.major == "5") {
              that.setData ({
                index_major: 5
              })
            } else if (res.data.major == "6") {
              that.setData ({
                index_major: 6
              })
            }
            if (res.data.grade == 0) {
              that.setData ({
                index_year: 0
              })
            } else if (res.data.grade == 1) {
              that.setData ({
                index_year: 1
              })
            } else if (res.data.grade == 2) {
              that.setData ({
                index_year: 2
              })
            } else if (res.data.grade == 3) {
              that.setData ({
                index_year: 3
              })
            } else if (res.data.grade == 4) {
              that.setData ({
                index_year: 4
              })
            } else if (res.data.grade == 5) {
              that.setData ({
                index_year: 5
              })
            } else if (res.data.grade == 6) {
              that.setData ({
                index_year: 6
              })
            } else if (res.data.grade == 7) {
              that.setData ({
                index_year: 7
              })
            } else if (res.data.grade == 8) {
              that.setData ({
                index_year: 8
              })
            }
          },
          fail: function() {
            console.log("please try again");
          }
        })

      }
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