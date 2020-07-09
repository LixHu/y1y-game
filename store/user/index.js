const user = {
	namespace: true,
	state: {
		userInfo: {}
	},
	getter: {
		
	},
	mutations: {
		setInfo: (state, data) =>  {
			state.userInfo = data
		}
	},
	actions: {
	}
}
export default user