(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-noticeList"],{4824:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".content[data-v-6a269b88]{display:-webkit-box;display:-webkit-flex;display:flex}.notice-text[data-v-6a269b88]{max-width:%?480?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",""]),t.exports=n},7117:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"cu-list menu"},t._l(t.list,(function(n,i){return e("v-uni-view",{key:i,staticClass:"cu-item arrow padding-30",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNoticeInfo(n.id)}}},[e("v-uni-navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"gift/index","open-type":"redirect"}},[e("v-uni-text",{staticClass:"cu-tag bg-red radius"},[t._v("公告")]),e("v-uni-text",{staticClass:"text-grey notice-text",staticStyle:{"margin-left":"8rpx"}},[t._v(t._s(n.title))])],1)],1)})),1)},c=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}))},"876d":function(t,n,e){"use strict";e.r(n);var i=e("9da2"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=a.a},"8bcd":function(t,n,e){"use strict";e.r(n);var i=e("a313"),a=e("971c");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);var o,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"7d75f464",null,!1,i["a"],o);n["default"]=r.exports},"971c":function(t,n,e){"use strict";e.r(n);var i=e("a44d"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=a.a},"9da2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:["list"],data:function(){return{}},methods:{goNoticeInfo:function(n){t.log(n),uni.navigateTo({url:"../notice/notice?id=".concat(n),success:function(){t.log("跳转到详情页")},fail:function(n){t.log(n)}})}}};n.default=e}).call(this,e("5a52")["default"])},"9f53":function(t,n,e){"use strict";var i=e("a4ca"),a=e.n(i);a.a},a313:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Notice",{attrs:{list:t.noticeList}})},c=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}))},a44d:function(t,n,e){"use strict";var i=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("e478")),c={components:{Notice:a.default},onLoad:function(){this.getNoticeList()},data:function(){return{noticeList:[]}},methods:{getNoticeList:function(){var t=this;this.$api.game.getNotice().then((function(n){1001===n.status&&(t.noticeList=n.data.placard)}))}}};n.default=c},a4ca:function(t,n,e){var i=e("4824");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("09f3e002",i,!0,{sourceMap:!1,shadowMode:!1})},e478:function(t,n,e){"use strict";e.r(n);var i=e("7117"),a=e("876d");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("9f53");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6a269b88",null,!1,i["a"],o);n["default"]=r.exports}}]);