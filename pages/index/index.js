Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    scroll: false,
    navList: [{
      title: '锚点1',
      background: '#f17c67',
      content: [{
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }, {
        article: "列表一"
      }]
    }, {
      title: '锚点2',
      background: '#96ceb4',
      content: [{
        article: "列表二"
      }, {
        article: "列表二"
      }, {
        article: "列表二"
      }, {
        article: "列表二"
      }, {
        article: "列表二"
      }, {
        article: "列表二"
      }, {
        article: "列表二"
      }]
    }, {
      title: '锚点3',
      background: '#d9d9f3',
      content: [{
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }, {
        article: "列表三"
      }]
    }, {
      title: '锚点4',
      background: '#fad3cf',
      content: [{
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }, {
        article: "列表四"
      }]
    }, {
      title: '锚点5',
      background: '#f6f6e9',
      content: [{
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }, {
        article: "列表五"
      }]
    }, {
      title: '锚点6',
      background: '#6abe83',
      content: [{
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }, {
        article: "列表六"
      }]
    }]
  },

  navTap(res) {
    let currentTab = res.currentTarget.dataset.index;
    this.setData({
      currentTab: currentTab
    })
    console.log(currentTab)
  },
  onPageScroll(e){
    // let _this = this;
    // let topHeight = this.data.topHeight;
    // if(e.scrollTop < topHeight){
    //   _this.setData({
    //     scroll:false
    //   })
    // } else{
    //   _this.setData({
    //     scroll:true
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let query = wx.createSelectorQuery();
    // 计算屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          windowHeight:res.windowHeight
        })
      },
    })
    // 计算顶部高度
    query.select(".top").boundingClientRect(function(rect) {
      _this.setData({
        topHeight:rect.height
      })
    }).exec();
    // 计算菜单高度
    query.select(".nav").boundingClientRect(function(rect) {
      _this.setData({
        navHeight:rect.height
      })
    }).exec(); 

    query.selectAll(".box").boundingClientRect(function(rect) {
      _this.setData({
        boxHeight:rect
      })
    }).exec();

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