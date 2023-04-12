# wechat_miniprogram_components
These are the customized components I made for Wechat miniprogram projects.

There are some components here and I hope they can help you on learning or working.

They can be used easily. Good luck for you.



[overview]
1.jan-single-image-preload-preview
for single image display with preload, lazyload, preview function. And you can turn off some features by options input.

Code example: 
  .wxml
  <janui-single-image-preload-preview src="{{itm}}" urls="{{urls}}" lazyload="{{defaultLazyload}}" margin="{{ urls.length==1? defaultMargin1 : defaultMargin2 }}"
  width="{{ urls.length==1? defaultWidthHeight1 : ( urls.length==2? defaultWidthHeight2 : '' ) }}"
  height="{{ urls.length==1? defaultWidthHeight1 : ( urls.length==2? defaultWidthHeight2 : '' ) }}" />

  .js
  urls: [
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M01/DC/03/1400x0_1_q95_autohomecar__ChxkqWIumySASZTzAA-Y5ruhR4E911.jpg" },
  { imgUrl: "https://car3.autoimg.cn/cardfs/product/g25/M08/DC/03/1400x0_1_q95_autohomecar__ChxkqWIumyWAPbyGAA1Wyj5s4TI348.jpg" },
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M05/02/D4/1400x0_1_q95_autohomecar__ChwFj2IumySAZfPIAA-R81e_ueE201.jpg" },
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M02/02/D3/1400x0_1_q95_autohomecar__ChwFj2IumyOAXaQGABIDSve60PI092.jpg" }
  ],



2.jan-multi-image-preload-preview
for multi-image display with preload, lazyload, preview function. And you can turn off some features by options input.

Code example: 
  .wxml
  <jan-multi-image-preload-preview urls="{{ urls }}" />
  
  .js
  urls: [
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M01/DC/03/1400x0_1_q95_autohomecar__ChxkqWIumySASZTzAA-Y5ruhR4E911.jpg" },
  { imgUrl: "https://car3.autoimg.cn/cardfs/product/g25/M08/DC/03/1400x0_1_q95_autohomecar__ChxkqWIumyWAPbyGAA1Wyj5s4TI348.jpg" },
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M05/02/D4/1400x0_1_q95_autohomecar__ChwFj2IumySAZfPIAA-R81e_ueE201.jpg" },
  { imgUrl: "https://car2.autoimg.cn/cardfs/product/g25/M02/02/D3/1400x0_1_q95_autohomecar__ChwFj2IumyOAXaQGABIDSve60PI092.jpg" }
  ],
  
 
 
Any issues you can send email to me if I have time to check.
jan_zeng
@@@  
outlook.com
