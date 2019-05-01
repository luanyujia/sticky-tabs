// components/sticky/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {},
  relations: {
    '../sticky-item/index': {
      type: 'child',
      linked() {
        this._updateDataChange();
      },
      linkChanged() {
        this._updateDataChange();
      },
      unlinked() {
        this._updateDataChange();
      }
    }
  },
  properties: {
    scrollTop: {
      type: Number,
      observer(val) {
        this._updateScrollTopChange(val);
      }
    },
    tabList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 0, // 距离顶部的距离
    timer: null,
    currentTab: 0,
    boxTopArr: [], // 存放子组件高度的数组
    scrollLock: false, // 点击tab时对滚动加锁
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击tab
    onTabsChange({
      detail
    }) {
      let _this = this;
      this.setData({
        currentTab: detail.key,
      })
      this.data.scrollLock = true;
      let boxTopArr = this.data.boxTopArr;
      wx.pageScrollTo({
        scrollTop: boxTopArr[detail.key] + 1,
        duration: 400,
        complete() {
          _this.data.scrollLock = false;
        }
      })
    },
    addChildHeightToArr(item) {
      const boxTopArr = this.data.boxTopArr;
      if (!boxTopArr.length) boxTopArr.push(this.data.top);
      const childTop = boxTopArr[boxTopArr.length - 1] + item;
      boxTopArr.push(childTop);
      this.data.boxTopArr = boxTopArr;
    },
    // 监听到页面滚动
    _updateScrollTopChange(scrollTop) {
      if (this.data.scrollLock) return;
      console.log('监听到页面滚动')
      let boxTopArr = this.data.boxTopArr;
      let currentTab = this.data.currentTab;
      for (let i = 1; i < boxTopArr.length; i++) {
        if (scrollTop < boxTopArr[i]) {
          this.setData({
            currentTab: i - 1
          })
          return
        }
      }


    },
    _updateDataChange() {
      // 此处设置计时器的目的是可以让所有的linked均执行完毕之后再执行下面逻辑
      clearTimeout(this.data.timer);
      const items = this.getRelationNodes('../sticky-item/index');
      const timer = setTimeout(() => {
        const query = wx.createSelectorQuery().in(this);
        query.select('.header').boundingClientRect((res) => {
          const top = res.top;
          this.data.top = top;
          items.forEach((item, index) => {
            item.updateDataChange(index);
          })
        }).exec()
      }, 0)
      this.data.timer = timer;
    }
  }
})