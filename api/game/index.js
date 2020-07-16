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
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGame&a=getRecentGame`,
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
	getNotice(page, pageSize) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGame&a=getNotice&page=${page}&pageSize=${pageSize}`,
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
	// 领取礼包
	receiveGift(id) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getGiftbag&id=${id}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取搜索结果
	getSearchValue(keyword) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getSearchRes&keyWord=${keyword}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取公告详情
	getNoticeInfo(id) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGame&a=getNoticeInfo&noticeId=${id}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 礼包列表
	getGiftList() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGift&a=getGiftList`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 领取礼包
	receiveGift(id) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=exchangeGiftForInteger&id=${id}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 获取二维码配置
	getQrCode() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameInterface&a=getAllConfig`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
	// 点击开始游戏记录游戏点击
	onPlayGame(gameId) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.commonUrl}/index.php?g=Game&m=GameCenterGame&a=onPlayGame&gameId=${gameId}`,
				method: 'GET',
				success: (res) => {
					resolve(res.data)
				}
			})
		})
	}
}