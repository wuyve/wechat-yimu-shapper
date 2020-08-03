// pages/coustomAppo/getAppo/getAppo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customAppo: {},
    isNewAppo: true,
    isStart: false,
    isEnd: false,
    isCancel: false
  },
  // 显示新预约项目
  showNewAppo: function () {
    this.setData({
      isNewAppo: true,
      isStart: false,
      isEnd: false,
      isCancel: false
    });
    this.showList(0);
  },
  // 显示待开始项目
  showStartAppo: function () {
    this.setData({
      isNewAppo: false,
      isStart: true,
      isEnd: false,
      isCancel: false
    });
    this.showList(1);
  },
  // 显示已结束项目
  showEndAppo: function () {
    this.setData({
      isNewAppo: false,
      isStart: false,
      isEnd: true,
      isCancel: false
    });
    this.showList(4);
  },
  // 显示已取消项目
  showCancelAppo: function () {
    this.setData({
      isNewAppo: false,
      isStart: false,
      isEnd: false,
      isCancel: true
    });
    this.showList(2);
  },
  // 显示预约项目
  showList: function (options) {
    let data = {
      options,
    };
    let that = this;
    wx.request({
      url: 'http://localhost:8000/appoint/get',
      method: 'GET',
      data,
      success (res) {
        let data = res.data;
        if (data.errno.errno == 200) {
          let results = data.results;
          for (let i = 0, len = results.length; i < len; i++) {
            results[i].date = that.formatDate(results[i].date);
          }
          that.setData({
            customAppo: results
          });
        } else {
          console.log(data.errno.message);
        }
      },
      fail (res) {
        console.log(res);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isNewAppo: true,
      isStart: false,
      isEnd: false
    });
    this.showList(0);
    // this.showNewAppo();
  },
  // 转换时间格式
  formatDate: function (date) {
    return app.myTimeToLocal(date);
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