export default class GameApi {
	constructor(props) {
	    this.commonUrl = props
	}
	// banner
	getBannerList() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getGameBanner`,
				method: 'GET',
				success(res) {
					resolve(res.data)
				}
			})
		})
	}
	// 最近在玩
	getRencentGame() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=game_recent`,
				method: 'GET',
				success: (res) => {
					resolve(res)
				}
			})
		})
	}
	// 获取游戏列表
	getListGame(type, page, pageSize) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=game_list&type=${type}&page=${page}&pagesize=${pageSize}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取活动公告
	getNotice() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getGameActivity`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取游戏详情
	getGameInfo(gameId) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getGameInfo&gameId=${gameId}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
				
			})
		})
	}
	
	
	getSearchGame() {
		
	}
}