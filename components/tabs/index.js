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
      observer: 'changeCurrent'
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
    scrollLeft: 0
  },
  methods: {
    changeCurrent(val = this.data.current) {
      let items = this.getRelationNodes('../tab/index');
      const len = items.length;
      const width = 100 / len + '%';
      if (len > 0) {
        items.forEach(item => {
          item.changeScroll(this.data.scroll);
          item.changeCurrent(item.data.key === val);
          if (item.data.key === val) {

          }
          item.changeCurrentColor(this.data.color);
          item.changeWidth(width);
        });
      }
    },
    emitEvent(key) {
      this.triggerEvent('change', { key });
    }
  }
});