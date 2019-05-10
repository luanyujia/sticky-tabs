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
      if (this.data.current) this.scrollTo(true, 0);
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
      const itemLeft = e.currentTarget.offsetLeft;
      const parent = this.getRelationNodes('../tabs/index')[0];
      parent.emitEvent(this.data.key);
      this.scrollTo(false, itemLeft)
    },
    scrollTo(firstLoad, itemLeft) {
      let itemWidth = 0;
      const parent = this.getRelationNodes('../tabs/index')[0];
      const query = wx.createSelectorQuery().in(this);
      query.select('.i-tabs-tab').boundingClientRect((res) => {
        let scrollLeft = itemLeft;
        if (firstLoad) scrollLeft = res.left;
        itemWidth = res.width;
        const windowWidth = wx.getSystemInfoSync().windowWidth;
        parent.setData({
          scrollLeft: scrollLeft - windowWidth / 2 + itemWidth / 2
        })
      }).exec()
    }
  }
});