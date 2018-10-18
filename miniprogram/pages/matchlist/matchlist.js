// pages/matchlist/matchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseList: [
      {
        id: "0",
        message: "智慧校园",
        image: "../../image/match1.jpg"
      },
      {
        id: "1",
        message: "科创培育项目",
        image: "../../image/match2.png"
      },
      {
        id: "2",
        message: "黑客松",
        image: "../../image/match3.jpg"
      },
      {
        id: "3",
        message: "创新创业大赛",
        image: "../../image/match4.jpg"
      }
    ],
   
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

  },
  selectedFourth: function (e) {
    console.log("选中第" + e.detail.index + "个标签，选中的id：" + e.detail.selectedId + "；选中的内容：" + e.detail.selectedTitle);
  },
  showDialog: function (e) {

  },
  //取消事件
  _cancelEvent: function (e) {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent: function (e) {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})