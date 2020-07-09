<template>
	<view class="bg-white">
		<view class="bg-img bg-mask flex align-center info-back" :style="{backgroundImage: `url(${gameInfo.cover})`}"></view>
		<view class="game-info-header">
			<view class="radius icon" :style="{ backgroundImage: `url(${gameInfo.icon})`}"></view>
			<text class="text-black game-name">{{ gameInfo.game_name }}</text>
			<text class="text-gray game-desc">{{ gameInfo.introduction }}</text>
			<button class="cu-btn bg-red round game-start" @click="goGame()">开始游戏</button>
		</view>
		
		<view class="cu-bar">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text>
				游戏简介
			</view>
		</view>
		<view class="game-detailed">
			<text v-html="gameInfo.content"> </text>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index == TabCur?'text-orange cur' : '' " v-for="(item,index) in tabArr" :key="index" @tap="tabSelect(item.key)">
					{{ item.title }}
				</view>
			</view>
		</scroll-view>
		<!-- 礼包或资讯 -->
		<view v-if="TabCur === 0">
			<Gift :list="giftList"></Gift>
		</view>
		<view v-if="TabCur === 1">
			<Notice :list="noticeList"></Notice>
		</view>
		
		<view class="cu-bar game-info-footer">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text>
				游戏信息
			</view>
		</view>
		<view class="game-info-desc">
			<text>{{ gameInfo.developer }}</text>
		</view>
		
	</view>
</template>

<script>
	import Gift from '../../components/gift.vue'
	import notice from '../../components/notice.vue'
	export default{
		components: {
			Gift: Gift,
			Notice: notice
		},
		onLoad(option) {
			this.gameId = option.gameId
			this.getGameInfo()
		},
		data() {
			return {
				TabCur: 0,
				tabArr: [
					{ key: 0, title: '礼包' },
					{ key: 1, title: '资讯' },
				],
				giftList: [],
				noticeList: [],
				gameId: '',
				gameInfo: {},
			}
		},
		methods:{
			tabSelect(id) {
				this.TabCur = id;
			},
			getGameInfo() {
				this.$api.game.getGameInfo(this.gameId).then((res) => {
					if(res.status === 1001) {
						this.gameInfo = res.data
						this.giftList = res.data.gift
					}else {
						// uni.navigateBack()
					}
				})
			},
			goGame() {
				window.location.href = `${this.$url}/Wap/App/game_new?channel=${ this.gameInfo.str }`
				// uni.navigateTo({
				// 	url: `playGame?channel=${ this.gameInfo.str }`,
				// 	success() {
				// 		console.log('玩游戏去')
				// 	},
				// 	fail(e) {
				// 		console.log('没去', e)
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.info-back {
		background-size: 100% 100%;
		height: 280rpx;
	}
	.game-info-header {
		margin-top: 30rpx;
		text-align: center;
	}
	
	.game-info-header > .icon{
		width: 120rpx;
		height: 120rpx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		left: calc(50% - 60rpx);
	}
	.game-info-header > .game-name {
		margin-top: 10rpx;
		font-size: 32rpx;
		display: inherit;
		overflow: hidden;
	}
	.game-info-header > .game-desc {
		margin-top: 6rpx;
		font-size: 20rpx;
	}
	
	.game-detailed {
		padding: 0 40rpx;
	}
	
	.game-info-footer {
		margin-top: 40rpx;
	}
	
	.game-info-desc {
		padding: 0 40rpx;
	}
	
	.game-start {
		margin-top: 20rpx;
		position: relative;
		left: calc(50% - 15%);
		line-height: 60rpx;
		width: 30%;
		display: block;
	}
</style>
