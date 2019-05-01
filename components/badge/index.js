// components/badge/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['i-class', 'i-class-alone'],
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: 'finalCount'
    },
    overflowCount: {
      type: Number,
      value: 99
    },
    dot: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    finalCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    finalCount() {
      this.setData({
        finalCount: parseInt(this.data.count) >= parseInt(this.data.overflowCount) ? `${this.data.overflowCount}+`: this.data.count
      })
    }
  }
})
