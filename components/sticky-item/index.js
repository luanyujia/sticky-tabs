// components/sticky-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  relations: {
    '../sticky/index': {
      type: 'parent',
    }
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    updateDataChange(index) {
      const className = '.i-sticky-item';
      const query = wx.createSelectorQuery().in(this);
      const parent = this.getRelationNodes('../sticky/index')[0];
      const boxTopArr = parent.data.boxTopArr;
      const length = boxTopArr.length;
      query.select(className).boundingClientRect((res) => {
        parent.addChildHeightToArr({
          height: res.height,
          bottom: res.bottom
        });
      }).exec()
    }
  }
})