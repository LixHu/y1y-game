(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-game_info"],{"06b3":function(t,e,a){var i=a("750d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f9d9f4b4",i,!0,{sourceMap:!1,shadowMode:!1})},"0a4b":function(t,e,a){"use strict";var i=a("59f2"),n=a.n(i);n.a},2814:function(t,e,a){"use strict";a.r(e);var i=a("7090"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"2ddf":function(t,e,a){"use strict";a.r(e);var i=a("47d5"),n=a("2814");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("0a4b");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"6f053506",null,!1,i["a"],o);e["default"]=u.exports},4526:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".info-back[data-v-6f053506]{background-size:100% 100%;height:%?280?%}.game-info-header[data-v-6f053506]{margin-top:%?30?%;text-align:center}.game-info-header > .icon[data-v-6f053506]{width:%?120?%;height:%?120?%;background-size:100% 100%;background-repeat:no-repeat;position:relative;left:calc(50% - %?60?%)}.game-info-header > .game-name[data-v-6f053506]{margin-top:%?10?%;font-size:%?32?%;display:inherit;overflow:hidden}.game-info-header > .game-desc[data-v-6f053506]{margin-top:%?6?%;font-size:%?20?%}.game-detailed[data-v-6f053506]{padding:0 %?40?%}.game-info-footer[data-v-6f053506]{margin-top:%?40?%}.game-info-desc[data-v-6f053506]{padding:0 %?40?%}.game-start[data-v-6f053506]{margin-top:%?20?%;position:relative;left:calc(50% - 15%);line-height:%?60?%;width:30%;display:block}",""]),t.exports=e},"47d5":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"bg-img bg-mask flex align-center info-back",style:{backgroundImage:"url("+t.gameInfo.cover+")"}}),a("v-uni-view",{staticClass:"game-info-header"},[a("v-uni-view",{staticClass:"radius icon",style:{backgroundImage:"url("+t.gameInfo.icon+")"}}),a("v-uni-text",{staticClass:"text-black game-name"},[t._v(t._s(t.gameInfo.game_name))]),a("v-uni-text",{staticClass:"text-gray game-desc"},[t._v(t._s(t.gameInfo.introduction))]),a("v-uni-button",{staticClass:"cu-btn bg-red round game-start",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGame()}}},[t._v("开始游戏")])],1),a("v-uni-view",{staticClass:"cu-bar"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("游戏简介")],1)],1),a("v-uni-view",{staticClass:"game-detailed"},[a("v-uni-text",{domProps:{innerHTML:t._s(t.gameInfo.content)}})],1),a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},t._l(t.tabArr,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:i==t.TabCur?"text-orange cur":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect(e.key)}}},[t._v(t._s(e.title))])})),1)],1),0===t.TabCur?a("v-uni-view",[a("Gift",{attrs:{list:t.giftList}})],1):t._e(),1===t.TabCur?a("v-uni-view",[a("Notice",{attrs:{list:t.noticeList}})],1):t._e(),a("v-uni-view",{staticClass:"cu-bar game-info-footer"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("游戏信息")],1)],1),a("v-uni-view",{staticClass:"game-info-desc"},[a("v-uni-text",[t._v(t._s(t.gameInfo.developer))])],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},4824:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-6a269b88]{display:-webkit-box;display:-webkit-flex;display:flex}.notice-text[data-v-6a269b88]{max-width:%?480?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",""]),t.exports=e},"4e98":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["list"],data:function(){return{showModel:!1,giftCode:""}},methods:{reGift:function(t){var e=this;this.$api.game.receiveGift(t).then((function(t){e.giftCode=t.code,e.showModel=!0}))},copyCode:function(t){var e=this;uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制成功，请到游戏中领取",icon:"success"}),e.showModel=!1}})},hideModal:function(){this.showModel=!1}}};e.default=i},"59f2":function(t,e,a){var i=a("4526");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("772087ab",i,!0,{sourceMap:!1,shadowMode:!1})},7090:function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("da70")),s=i(a("e478")),o={components:{Gift:n.default,Notice:s.default},onLoad:function(t){this.gameId=t.gameId,this.getGameInfo()},data:function(){return{TabCur:0,tabArr:[{key:0,title:"礼包"},{key:1,title:"资讯"}],giftList:[],noticeList:[],gameId:"",gameInfo:{}}},methods:{tabSelect:function(t){this.TabCur=t},getGameInfo:function(){var t=this;this.$api.game.getGameInfo(this.gameId).then((function(e){1001===e.status&&(t.gameInfo=e.data,t.giftList=e.data.gift)}))},goGame:function(){window.location.href="https://docater1.cn/Wap/App/game_new?channel=".concat(this.gameInfo.str)}}};e.default=o},7117:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-list menu"},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item arrow padding-30",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goNoticeInfo(e.id)}}},[a("v-uni-navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"gift/index","open-type":"redirect"}},[a("v-uni-text",{staticClass:"cu-tag bg-red radius"},[t._v("公告")]),a("v-uni-text",{staticClass:"text-grey notice-text",staticStyle:{"margin-left":"8rpx"}},[t._v(t._s(e.title))])],1)],1)})),1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},"750d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".gift-code[data-v-280c42d1]{margin-left:%?30?%;margin-bottom:%?10?%}.gift-code > uni-text[data-v-280c42d1]{font-size:%?36?%}",""]),t.exports=e},"876d":function(t,e,a){"use strict";a.r(e);var i=a("9da2"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"9da2":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["list"],data:function(){return{}},methods:{goNoticeInfo:function(e){t.log(e),uni.navigateTo({url:"../notice/notice?id=".concat(e),success:function(){t.log("跳转到详情页")},fail:function(e){t.log(e)}})}}};e.default=a}).call(this,a("5a52")["default"])},"9f53":function(t,e,a){"use strict";var i=a("a4ca"),n=a.n(i);n.a},a4ca:function(t,e,a){var i=a("4824");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("09f3e002",i,!0,{sourceMap:!1,shadowMode:!1})},ab6d:function(t,e,a){"use strict";var i=a("06b3"),n=a.n(i);n.a},cb96:function(t,e,a){"use strict";a.r(e);var i=a("4e98"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},d7a8:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-list menu"},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cu-tag line-cyan sm"},[t._v("普通")]),a("v-uni-text",{staticClass:"text-grey",staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(e.giftbag_name))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn round bg-red sm shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.reGift(e.id)}}},[t._v("领取")])],1)],1)})),1),a("v-uni-view",{staticClass:"cu-modal",class:t.showModel?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("领取礼包")]),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"padding-xl"},[a("v-uni-view",{staticClass:"gift-info"},[a("v-uni-view",{staticClass:"grid col-1 gift-code"},[a("v-uni-text",{staticClass:"text-black"},[t._v("礼包码：")]),a("v-uni-text",{staticClass:"text-gray"},[t._v(t._s(t.giftCode))])],1),a("v-uni-button",{staticClass:"cu-btn bg-red lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyCode(t.giftCode)}}},[t._v("复制")])],1)],1)],1)],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},da70:function(t,e,a){"use strict";a.r(e);var i=a("d7a8"),n=a("cb96");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ab6d");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"280c42d1",null,!1,i["a"],o);e["default"]=u.exports},e478:function(t,e,a){"use strict";a.r(e);var i=a("7117"),n=a("876d");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("9f53");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"6a269b88",null,!1,i["a"],o);e["default"]=u.exports}}]);