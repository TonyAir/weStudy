var postsData = require('../../data/posts-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 小程序总会读取data 对象来做数据绑定，这个是在onLoad 事件执行之后发生的

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postList: postsData.postList
    });
  },

  onPostTap: function (event){

    var postId = event.currentTarget.dataset.postid;
    console.log("postId is :" + postId);
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })

  }
  
})