(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-index"],{"0290":function(t,n,i){"use strict";var e=i("0e8c"),a=i.n(e);a.a},"0e8c":function(t,n,i){var e=i("6a96");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("fcf76bd4",e,!0,{sourceMap:!1,shadowMode:!1})},"1fe5":function(t,n,i){var e=i("8839");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("2b2f1586",e,!0,{sourceMap:!1,shadowMode:!1})},"272f":function(t,n,i){"use strict";var e=i("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("f3f3")),o=i("2f62"),u={computed:(0,a.default)({},(0,o.mapState)({userInfo:function(t){return t.user.userInfo}})),created:function(){this.getUserInfo()},data:function(){return{}},methods:(0,a.default)({},(0,o.mapMutations)(["setInfo"]),{getUserInfo:function(){var t=this;this.$api.user.getUserInfo().then((function(n){1001===n.status&&t.setInfo(n.data)}))}})};n.default=u},"2f84":function(t,n,i){"use strict";i.r(n);var e=i("340b"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"340b":function(t,n,i){"use strict";var e=i("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("8ccd")),o={components:{HeaderContent:a.default},data:function(){return{}},methods:{goToSafety:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToBindPhone:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToRealName:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToRegulations:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToPolicy:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToFCM:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},goToFZP:function(){uni.showToast({title:"功能暂未开放",icon:"none"})},addToDes:function(){uni.showToast({title:"功能暂未开放",icon:"none"})}}};n.default=o},"5ea3":function(t,n,i){"use strict";var e=i("1fe5"),a=i.n(e);a.a},"6a96":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".header-content[data-v-0604e313]{width:100%;height:%?280?%;background-image:url(https://y1y-game.oss-cn-shanghai.aliyuncs.com/common-bg.jpeg);background-size:100% 100%;background-repeat:no-repeat;display:-webkit-box;display:-webkit-flex;display:flex}.avatar[data-v-0604e313]{position:absolute;top:%?60?%;left:%?40?%;background-size:100% 100%}.avatar-not-login[data-v-0604e313]{position:absolute;top:%?60?%;left:calc(50% - %?60?%)}.userinfo[data-v-0604e313]{position:relative;top:%?60?%;left:%?160?%;height:%?120?%;width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex}.userinfo > uni-text[data-v-0604e313]{line-height:%?40?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.right-link[data-v-0604e313]{position:absolute;right:%?40?%;top:%?80?%}.login-btn[data-v-0604e313]{top:%?45?%;right:%?5?%;height:%?40?%;width:%?120?%}",""]),t.exports=n},8839:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".menu-item[data-v-846c43e2]{width:80%;height:%?140?%}.manage-option[data-v-846c43e2]{margin-top:%?20?%}.option-item[data-v-846c43e2]{padding:%?20?%;text-align:center}.option-item > uni-text[data-v-846c43e2]{display:block}.login-out[data-v-846c43e2]{width:100%;height:%?120?%;margin-top:%?20?%;padding:%?20?%}.login-out > uni-button[data-v-846c43e2]{width:100%;height:100%}",""]),t.exports=n},"8ccd":function(t,n,i){"use strict";i.r(n);var e=i("b324"),a=i("c31b");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("0290");var u,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"0604e313",null,!1,e["a"],u);n["default"]=c.exports},aafc:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("HeaderContent"),i("v-uni-view",{staticClass:"grid col-4 manage-option"},[i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToSafety.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-warn"})],1),i("v-uni-text",[t._v("安全中心")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToBindPhone.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-mobilefill"})],1),i("v-uni-text",[t._v("绑定手机")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToRealName.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-my"})],1),i("v-uni-text",[t._v("实名认证")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToRegulations.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-form"})],1),i("v-uni-text",[t._v("用户条例")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToPolicy.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-form"})],1),i("v-uni-text",[t._v("隐私政策")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToFCM.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-my"})],1),i("v-uni-text",[t._v("防沉迷")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToFZP.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-form"})],1),i("v-uni-text",[t._v("防诈骗")])],1),i("v-uni-view",{staticClass:"option-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addToDes.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg bg-red"},[i("v-uni-text",{staticClass:"cuIcon-mobile"})],1),i("v-uni-text",[t._v("添到桌面")])],1)],1),i("v-uni-view",{staticClass:"login-out"},[i("v-uni-button",{staticClass:"cu-btn bg-red round"},[t._v("退出登录")])],1)],1)},o=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}))},b324:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"header-content"},[t.userInfo.id?i("v-uni-view",[i("v-uni-view",{staticClass:"cu-avatar lg round avatar",style:{backgroundImage:"url("+t.userInfo.portrait+")"}}),i("v-uni-view",{staticClass:"grid col-1 text-left userinfo"},[i("v-uni-text",{staticClass:"text-bold"},[t._v(t._s(t.userInfo.wechaname))]),i("v-uni-text",[t._v("uid: "+t._s(t.userInfo.id))])],1),i("v-uni-view",{staticClass:"right-link"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("积分说明？")])],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"cu-avatar xl round avatar-not-login"},[i("v-uni-view",{staticClass:"cu-tag badge bg-grey login-btn"},[t._v("点击登录")])],1)],1)],1)},o=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}))},c31b:function(t,n,i){"use strict";i.r(n);var e=i("272f"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},d25a:function(t,n,i){"use strict";i.r(n);var e=i("aafc"),a=i("2f84");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("5ea3");var u,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"846c43e2",null,!1,e["a"],u);n["default"]=c.exports}}]);