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
      // {
      //   title: '锚点5',
      //   background: '#f6f6e9',
      //   content: [{
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }, {
      //     article: "列表五"
      //   }]
      // }, {
      //   title: '锚点6',
      //   background: '#6abe83',
      //   content: [{
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }, {
      //     article: "列表六"
      //   }]
      // }
    ],
    timer: null, // 计时器
    updateSticky: false
  },

  onPageScroll(e) {
    let scrollTop = e.scrollTop;
    this.setData({
      scrollTop
    })
  },
  // 向锚点二的列表中增加数据
  addData() {
    let key = 'navList[1].content'
    let data = this.data.navList[1].content
    for (let i = 0; i < 10; i++) {
      data = data.concat([{
        article: "新增列表二"
      }])
    }
    this.setData({
      [key]: data
    })
    // 重新计算sticky-item高度
    this.initSticky()
  },
  initSticky() {
    this.setData({
      updateSticky: !this.data.updateSticky
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

})