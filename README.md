
### 微信小程序吸顶+锚点组件

### 体验

<p>
  <img width="200" src="https://jansan.oss-cn-beijing.aliyuncs.com/qr_code.jpg?Expires=1595210985&OSSAccessKeyId=TMP.3KiJFy5Hhu773NxptNTCA17UR68JFgHdaTc8zyZWjpdXSQNtUe52TVZL9fRnfjSzUtJsgxKBCaecZavGUGYe5H3HHTNPsQ&Signature=3x7a0beRkWR4dg60LE6WXBL%2BEng%3D">
</p>

### 效果图

![效果图](https://jansan.oss-cn-beijing.aliyuncs.com/demo.gif?Expires=1595210937&OSSAccessKeyId=TMP.3KiJFy5Hhu773NxptNTCA17UR68JFgHdaTc8zyZWjpdXSQNtUe52TVZL9fRnfjSzUtJsgxKBCaecZavGUGYe5H3HHTNPsQ&Signature=2orh6PUFJ3Aq7m6mS%2F4%2ByC2M3fg%3D)


### 引入组件

将 `components` 文件夹拷贝至自己的组件目录，页面 `json` 文件中配置组件

```json
{
  "usingComponents": {
    "sticky": "/components/sticky/index",
    "sticky-item": "/components/sticky-item/index"
  }
}
```

在页面 `wxml` 中引入组件
```xml
  <sticky scrollTop="{{scrollTop}}" tabList="{{tabList}}">
      <sticky-item>
      </sticky-item>
  </sticky>
```


### 主要属性

1.tabList为吸顶tabs中对应的数据
```json
    tabs: [{
      title: '锚点1'
    }, {
      title: '锚点2'
    }],
```


2.scrollTop为页面滚动的距离，使用示例如下

```js
  onPageScroll(e) {
    let scrollTop = e.scrollTop;
    this.setData({
      scrollTop
    })
  },
```


3.sync 开启响应异步容器变化高度变化的开关。

<font color=orange>注意：sync和init必须配合使用，否则无效。</font>
使用场景如下：
1） 在sticky-item中数据为异步请求
2） sticky-item中内容的需要实现显示/隐藏功能


4.init 当需要重新计算sticky-item内容器高度时，改变init的值为!init，使用示例如下

```xml
  <l-sticky sync init="{{updateSticky}}" scrollTop="{{scrollTop}}" tabList="{{tabGroups}}">
  </sticky>
```

```js
  initSticky() {
    this.setData({
      updateSticky: !this.data.updateSticky
    })
  }
```
5.scrollTab 当tabs中tab过多时，可以使用该属性为tabs开启滑动功能

```xml
  <l-sticky scrollTab scrollTop="{{scrollTop}}" tabList="{{tabGroups}}">
  </sticky>
```




