/**
 * 单图片预加载与预览组件
 */
Component({
  properties: {
    // 以下参数除了src均有缺省值

    //要加载的图片
    src: String,
    mode: String,
    width: String,
    height: String,
    margin: String,
    borderradius: String,
    lazyload: Boolean,

    //预加载的文字
    // loadtext: String,
    // loadtextfontsize: String,
    // loadtextcolor: String,
    // loadtextstyle: String,

    //图片预览
    urls: Array,
  },

  data: {
    // 加载完成的标志，不可设置
    loadFlag: false,

    // 预加载的图片
    srcPreload: "../../../images/moment/sand-clock-20210706.3.svg",
    modePreload: "center",

    // 要加载的图片
    defaultMode: "aspectFill",
    defaultWidth: "210rpx",
    defaultHeight: "210rpx",
    defaultMargin: "0",
    defaultBorderradius: "15rpx",

    //预加载的文字
    // defaultLoadtext: "加载中",
    // defaultFontsize: "30rpx",
    // defaultColor: "#c2c2c2",
    // defaultStyle: "display: flex; justify-content: center; align-items: center;"
  },

  methods: {
    /**
     * 图片加载事件 - 设置标志
     */
    onLoad: function () {
      this.setData({
        loadFlag: true
      })
    },

    /**
      * 图片触摸事件 - 预览图片
      */
    onPreview: function (e) {
      var src = e.currentTarget.dataset.src
      var urls = e.currentTarget.dataset.urls

      wx.previewImage({
        current: src,
        urls: urls.length > 0 ? urls : [src]
      })
    },
  }
})