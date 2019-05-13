Component({
  externalClasses: ['i-class', 'i-class-title', 'i-class-tab-bar'],

  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },

  properties: {
    key: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
  },

  data: {
    current: false,
    currentColor: '',
    width: 0,
    scroll: false
  },
  lifetimes: {
    ready() {
    }
  },
  methods: {
    changeCurrent(current) {
      this.setData({
        current
      });
    },
    changeCurrentColor(currentColor) {
      this.setData({
        currentColor
      });
    },
    changeScroll(scroll) {
      this.setData({
        scroll
      });
    },
    changeWidth(width) {
      this.setData({
        width
      })
    },
    handleClickItem(e) {
      const parent = this.getRelationNodes('../tabs/index')[0];
      parent.emitEvent(this.data.key);
    },
    scrollTo() {
      let itemWidth = 0;
      const parent = this.getRelationNodes('../tabs/index')[0];
      const query = wx.createSelectorQuery().in(this);
      query.select('.i-tabs-tab').boundingClientRect((res) => {
        itemWidth = res.width;
        const windowWidth = wx.getSystemInfoSync().windowWidth;
        let scrollLeft = 0;
        scrollLeft = res.left - windowWidth / 2
        const scrollDistance = parent.data.scrollDistance;
        parent.setData({
          scrollLeft: scrollLeft + scrollDistance + itemWidth / 2
        })
      }).exec()
    }
  }
});