import Vue from 'vue'
import App from './App'
import Api from './api/index.js'
import iconH5Api from './js_sdk/ican-H5Api/ican-H5Api.js'
import store from 'store/index.js'

Vue.config.productionTip = false
Vue.prototype.$url = 'https://docater1.cn'
Vue.prototype.$api = Api
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
