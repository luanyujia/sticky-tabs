Component({
  externalClasses: ['i-class'],

  relations: {
    '../tab/index': {
      type: 'child',
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      }
    }
  },

  properties: {
    current: {
      type: String,
      value: '',
      observer(val) {
        this.changeCurrent();
      }
    },
    color: {
      type: String,
      value: ''
    },
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },
  data: {
    scrollLeft: 0,
    scrollDistance: 0, // scroll-view滚动的距离
    timer: null,
  },
  methods: {
    changeCurrent(val = this.data.current) {
      // 此处设置计时器的目的是可以让所有的linked均执行完毕之后再执行下面逻辑
      clearTimeout(this.data.timer);
      const timer = setTimeout(() => {
        let items = this.getRelationNodes('../tab/index');
        const len = items.length;
        const width = 100 / len + '%';
        if (len > 0) {
          items.forEach(item => {
            item.changeScroll(this.data.scroll);
            item.changeCurrent(item.data.key === val);
            if (item.data.key === val) {
              item.scrollTo();
            }
            item.changeCurrentColor(this.data.color);
            item.changeWidth(width);
          });
        }
      }, 0)
      this.data.timer = timer;
    },
    emitEvent(key) {
      this.triggerEvent('change', { key });
    },
    onScroll(e) {
      clearTimeout(this.data.scrollTimer);
      const scrollTimer = setTimeout(() => {
        const scrollDistance = e.detail.scrollLeft;
        this.data.scrollDistance = scrollDistance;
      }, 100);
      this.data.scrollTimer = scrollTimer;
    }
  }
});