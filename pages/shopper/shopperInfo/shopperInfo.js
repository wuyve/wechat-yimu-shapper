// pages/shopper/shopperInfo/shopperInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '',  // 搜索字
    shopperList: []  // 商家列表
  },
  // 绑定搜索词
  bindSearch: function (e) {
    this.setData({
      searchText: e.detail.value
    });
  },
  // 搜索商家信息
  searchShopper: function () {
    let data = {
      shopper_name: this.data.searchText
    };
    let that = this;
    wx.request({
      url: 'http://localhost:8000/shopper/info/get',
      method: 'GET',
      data,
      success (res) {
        if (res.statusCode == 200) {
          console.log(res.data.results)
          that.setData({
            shopperList: res.data.results
          });
        }
        console.log(res);
      }
    });
  },
  // 添加用户
  toUserInfo: function (e) {
    let mode = e.currentTarget.dataset.mode;
    let id = e.currentTarget.dataset.id || '';
    wx.navigateTo({
      url: '../modifyShopper/modifyShopper?mode=' + mode + '&id=' + id
    });
  },
  // 删除商家
  deleteShoper: function () {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.searchShopper();
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