Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0, // 当前滚动的距离
    tabs: [{
      title: '锚点1'
    }, {
      title: '锚点2'
    }],
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
      },
      {
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
      }
    ],
    timer: null, // 计时器
  },

  onPageScroll(e) {
    let scrollTop = e.scrollTop;
    this.setData({
      scrollTop
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

})