/**
 * 多图片预加载与预览组件
 */
Component({
  properties: {
    // 以下变量除了urls均有缺省值

    //要加载的图片数组
    urls: Array,
    // mode: String,
    // width: String,
    // height: String,
    // margin: String,
    // borderradius: String,
    // lazyload: String,

    //预加载的文字
    // loadtext: String,
    // loadtextfontsize: String,
    // loadtextcolor: String,
    // loadtextstyle: String,
  },

  data: {
    defaultLazyload: true,
    defaultWidthHeight1: "380rpx",
    defaultWidthHeight2: "320rpx",
    defaultMargin1: 0,
    defaultMargin2: "0 5rpx",
  },


  methods: {
    // onLoad() { }
  }
})