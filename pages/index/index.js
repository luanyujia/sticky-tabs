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
    let boxHeight = this.data.boxHeight;
    wx.pageScrollTo({
      scrollTop: boxHeight[currentTab],
      duration:0
    })

  },
  onPageScroll(e){
    let scrollTop = e.scrollTop;
    let boxHeight = this.data.boxHeight;
    let currentTab = this.data.currentTab;

    boxHeight.forEach((item, index) => {
      if (
        scrollTop >= boxHeight[index] &&
        scrollTop < boxHeight[index + 1]
      ) {
        this.setData({
          currentTab: index
        })
      }
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let query = wx.createSelectorQuery();
    // 计算顶部高度
    query.select(".top").boundingClientRect(function(rect) {
      _this.setData({
        topHeight:rect.height
      })
    }).exec();

    query.selectAll(".box").boundingClientRect(function(rect) {
      _this.setData({
        boxHeight:rect
      })
      let boxHeight = [_this.data.topHeight]
      let hei = _this.data.topHeight;
      rect.forEach(e => {
        console.log(e.height)
        hei += e.height;
        boxHeight.push(hei)
      });
      _this.setData({
        boxHeight:boxHeight
      })
    }).exec();

  },

})