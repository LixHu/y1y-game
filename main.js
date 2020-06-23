import Vue from 'vue'
import App from './App'
import game from './pages/game/home.vue'

Vue.component('game',game)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
