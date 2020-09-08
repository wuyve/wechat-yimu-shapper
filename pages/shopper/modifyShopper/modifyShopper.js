// pages/shopper/modifyShopper/modifyShopper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    occupation: ['职业1', '职业2', '职业3', '职业4', '职业5'],
    userInfo: {
      shopper_name: '',
      shopper_sex: 'female',
      shopper_phone: '',
      shopper_wechat: '',
      shopper_occuption: '',
      shopper_img: '../../../lib/images/上传图片.png',
      shopper_remarks: ''
    },
    index: 0,
    mode: '', // 模式
  },
  // 修改表单值
  changeValue: function (e) {
    let title = e.currentTarget.dataset.title;
    console.log(title)
    let value = e.detail.value;
    console.log(value)
    let data = `userInfo.${title}`;
    this.setData({
      [data]: value
    });
  },
  // 修改性别
  changeSex: function (e) {
    this.setData({
      ['userInfo.shopper_sex']: e.detail.value
    });
  },
  // 修改职业
  changeOccup: function (e) {
    let index = e.detail.value;
    let occuption = this.data.occupation[index];
    this.setData({
      ['userInfo.shopper_occuption']: occuption,
    });
  },
  // 上传图片
  uploadImg: function () {
    console.log('上传图片咯');
    let that = this;
    wx.chooseImage({
      count: 1,
      success (res) {
        that.setData({
          ['userInfo.shopper_img']: res.tempFilePaths[0]
        });
        console.log('图片上传成功啦', res)
      }
    });
  },
  // 保存按钮
  saveUser: function () {
    console.log(this.data.userInfo);
    let data = {
      ...this.data.userInfo,
      open_id: 'wuyue',
      score: '0'
    }
    wx.request({
      url: 'http://localhost:8000/shopper/info/add',
      method: 'POST',
      data,
      success (res) {
        console.log(res);
      }
    });
  },
  // 获取商家详情
  getShopperInfo: function () {
    wx.request({
      url: 'http://localhost:8000/shopper/info/get',
      method: 'GET',
      data: '',
      success (res) {
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let mode = options.mode || '';
    this.setData({
      mode
    });
    console.log(this.data.occupation)
    if (this.data.mode == 'add') {
      let occuption = this.data.occupation['0'];
      this.setData({
        ['userInfo.shopper_occuption']: occuption
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