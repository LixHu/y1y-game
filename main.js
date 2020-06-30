import Vue from 'vue'
import App from './App'
import game from './pages/game/home.vue'
import gift from './pages/gift/index.vue'
import my from './pages/my/index.vue'
import service from './pages/service/index.vue'

Vue.component('game',game)
Vue.component('gift', gift)
Vue.component('my', my)
Vue.component('service', service)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
