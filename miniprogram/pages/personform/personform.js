var major = 0;
var year = 0;
Page
({
  /**
   * 页面的初始数据
   */
  data: {
    array1: ['请选择专业', '软件工程', '计算机科学', '心理学', '设计', '教育', '经管'],
    index1: 0,
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
    index2: 0,
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
      major = this.data.array1[6];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 5) {
      major = this.data.array1[5];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 4) {
      major = this.data.array1[4];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 3) {
      major = this.data.array1[3];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 2) {
      major = this.data.array1[2];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 1) {
      major = this.data.array1[1];
      this.setData({
        index1: e.detail.value
      })
    }
    if (e.detail.value == 0) {
      major = this.data.array1[0];
      this.setData({
        index1: e.detail.value
      })
    }
  },
  bindCasePickerChange_year: function(e) {
    if (e.detail.value == 9) {
      year = this.data.array2[9];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 8) {
      year = this.data.array2[8];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 7) {
      year = this.data.array2[7];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 6) {
      year = this.data.array2[6];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 5) {
      year = this.data.array2[5];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 5) {
      year = this.data.array2[5];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 4) {
      year = this.data.array2[4];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 3) {
      year = this.data.array2[3];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 2) {
      year = this.data.array2[2];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 1) {
      year = this.data.array2[1];
      this.setData({
        index2: e.detail.value
      })
    }
    if (e.detail.value == 0) {
      year = this.data.array2[0];
      this.setData({
        index2: e.detail.value
      })
    }
  },
  formSubmit: function(e) {
    let {
      name,
      num,
      phone,
      email,
      skill
    } = e.detail.value;
    let mymajor = major;
    let myyear = year;
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
        method: 'POST',
        header: {

          'sessionid': wx.getStorageSync('sessionid')
        },
        data: {
          studentId: num,
          studentName: name,
          grade: myyear,
          major: mymajor,
          contacts: phone + ';' + email,
          specialty: skill,
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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