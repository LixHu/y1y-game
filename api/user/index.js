
export default class UserApi {
	constructor(props) {
	    this.commonUrl = props
	}
	// 获取用户信息
	getUserInfo() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=userInfo`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 签到列表 
	getSignList() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getSignIntegerList`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 签到
	signIn() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=signInNew`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取用户积分详情
	getIntegerRecord(type, page, pageSize) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getIntegerRecord&type=${type}&page=${page}&pageSize=${pageSize}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取礼包领取详情
	getGiftReceive(page, pageSize) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGift&a=getGiftReceive&page=${page}&pageSize=${pageSize}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
}