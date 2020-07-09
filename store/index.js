import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
	modules: {
		user: user
	}
})

export default Store