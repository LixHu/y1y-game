<template>
	<view class="container bg-wh">
		<view class="cu-bar bg-white grid col-2 logo-content">
			<view>
				<view class="logo"></view>
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" @confirm="searchGame" placeholder="搜索想要玩的游戏" confirm-type="search"></input>
			</view>
		</view>
		<!-- 轮播图部分 -->
		<view>
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in bannerList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item" @click="goGameInfo(item.id)">
						<view :style="{ backgroundImage: `url(${item.cover})` }" mode="aspectFill" class="banner-icon"></view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 导航部分 -->
		<view class="index-navigate">
			<view class="grid col-4 navigate-btns">
				<view class="navigate-btn" @click="goGift()">
					<view style="background-image: url(../../static/index/2.png);"></view>
				</view>
				<view class="navigate-btn" @click="goShop()">
					<view style="background-image: url(../../static/index/3.png);"></view>
				</view>
				<view class="navigate-btn" @click="showNotCan()">
					<view style="background-image: url(../../static/index/4.png);"></view>
				</view>
				<view class="navigate-btn" @click="showNotCan()">
					<view style="background-image: url(../../static/index/1.png);"></view>
				</view>
			</view>
		</view>
		<!-- 排行榜 -->
		<!-- <view class="grid col-1" style="text-align: center;">
			<view class="rank-text">
				<text>排行榜<text class="text-gray">date</text></text>
			</view>
			<view class="rank-info">
				<view class="grid col-1" >
					<view class="vip-info grid col-2" style="margin-bottom: 10rpx;">
						<view class="vip-icon" style="background-color: red;"></view>
						<view class="vip-user">
							<view class="cu-avatar round" style='background-image: url("https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg");'></view>
							<text>1222222</text>
						</view>
					</view>
					<view class="vip-info grid col-2">
						<view class="vip-icon" style="background-color: red;"></view>
						<view class="vip-user">
							<view class="cu-avatar round" style='background-image: url("https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg");'></view>
							<text>1222222</text>
						</view>
					</view>
					<view class="vip-info grid col-2">
						<view class="vip-icon" style="background-color: red;"></view>
						<view class="vip-user">
							<view class="cu-avatar round" style='background-image: url("https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg");'></view>
							<text>1222222</text>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- 最近在玩 -->
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				最近在玩
			</view>
			<view class="action">
				<!-- <text class="cuIcon-more"></text> -->
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid col-4 grid-square">
				<view v-for="(item,index) in rencentGame" :key="index" class="game-icon" v-if="item.game" @click="goGameInfo(item.id)">
					<image :src="item.game.icon" class="game-prefix" />
					<text >{{item.game.game_name}}</text>
				</view>
			</view>
		</view>
		<!-- 热门推荐 -->
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				热门推荐
			</view>
			<view class="action">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid col-4 grid-square">
				<view v-for="(item,index) in hotGame" :key="index" class="game-icon" @click="goGameInfo(item.id)">
					<image :src="item.icon" class="game-prefix" />
					{{ item.game_name }}
				</view>
			</view>
		</view>
		<!-- 最新 -->
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				最新上架
			</view>
			<view class="action">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid col-4 grid-square">
				<view v-for="(item,index) in newGame" :key="index" class="game-icon" @click="goGameInfo(item.id)">
					<image :src="item.icon" class="game-prefix" />
					{{ item.game_name }}
				</view>
			</view>
		</view>
		<!-- 公告 -->
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				活动公告
			</view>
			<view class="action">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<Notice :list="noticeList" />
	</view>
</template>

<script>
	import notice from '../../components/notice.vue'
	export default {
		components: {
			Notice: notice
		},
		onLoad() {
			this.getBannerList()
			this.getRencentGame()
			this.getGameList('hot')
			this.getGameList('new')
			this.getNotice()
		},
		data() {
			return {
				cardCur: 0,
				bannerList: [],
				rencentGame:[],
				hotGame: [],
				newGame: [],
				noticeList: [],
				TabCur: 0,
				dotStyle: false
			}
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			getBannerList() {
				this.$api.game.getBannerList().then((res) => {
					if(res.status === 1001) {
						this.bannerList = res.data
					}else {
						uni.showToast({
							title: '网络连接失败',
							icon: 'none'
						})
					}
				})
			},
			getRencentGame() {
				this.$api.game.getRencentGame().then((res) => {
					if(res.data.status == 1001) {
						this.rencentGame = res.data.data
					}
				})
			},
			getGameList(type) {
				this.$api.game.getListGame(type, 1, 12).then((res) => {
					if(res.status === 1001) {
						switch(type) {
							case 'hot': 
								this.hotGame = res.data
								break;
							case 'new': 
								this.newGame = res.data
								break;
							default: 
								this.gameList = res.data
								break
						}
					}
				})
			},
			getNotice() {
				this.$api.game.getNotice().then((res) => {
					if(res.status == 1001) {
						this.noticeList = res.data.placard
					}
				})
			},
			goGameInfo(id) {
				uni.navigateTo({
					url: `game_info?gameId=${id}`,
					success: () => {
						console.log('跳转到游戏详情')
					}
				})
			},
			goGift() {
				uni.switchTab({
					url: "../gift/index",
					success: () => {
						console.log('跳转到福利')
					}
				})
			},
			goShop() {
				uni.switchTab({
					url: "../gift/index",
					success: () => {
						console.log('跳转到商城')
					},
					fail: (e) => {
						console.log('没跳',e)
					}
				})
			},
			showNotCan() {
				
				uni.showToast({
					title: '功能暂未开放',
					icon: 'none'
				})
			},
			searchGame(e) {
				let keyword = e.target.value
				uni.navigateTo({
					url: `searchRes?keyword=${keyword}`,
					success: () => {
						console.log('我去搜索了')
					}
				})
			}
		}
	}
</script>

<style>
	.logo {
		width: 80%;
		height: 100rpx;
		background-image: url('https://y1y-game.oss-cn-shanghai.aliyuncs.com/logo.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-left: 20rpx;
	}
	
	.card-title {
		font-size: 26rpx !important;
	}
	
	.container {
		/* background-color: #FFF; */
		/* padding: 20rpx 0; */
	}
	.game-icon {
		text-align: center;
		height: 190rpx !important;
	}
	
	.game-icon  > text{
		margin-top: 10rpx;
		text-align: center;
		
	}
	.game-prefix {
		width: 140rpx;
		height: 140rpx;
	}
	
	.rank-info {
		margin-top: 10rpx;
		height: 70rpx;
		overflow: auto;
	}
	
	.banner-icon {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
	}
	
	.index-navigate {
		
	}
	
	.navigate-btn {
		width: 100%;
		height: 140rpx;
	}
	
	.navigate-btn > view {
		margin: 0 auto;
		width: 70%;
		height: 70%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
