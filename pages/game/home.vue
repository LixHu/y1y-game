<template>
	<view class="container">
		<view class="cu-bar bg-white grid col-2" >
			<view class="logo">
				
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜索想要玩的游戏" confirm-type="search"></input>
			</view>
		</view>
		<view>
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="grid col-1" style="text-align: center;">
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
		</view>
		
		
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				最近在玩
			</view>
			<view class="action">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="grid col-4 grid-square">
				<view v-for="(item,index) in avatar" :key="index" class="game-icon">
					<image :src="avatar[index]" class="game-prefix" />
					1223
				</view>
			</view>
		</view>
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
				<view v-for="(item,index) in avatar" :key="index" class="game-icon">
					<image :src="avatar[index]" class="game-prefix" />
					1223
				</view>
			</view>
		</view>
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
				<view v-for="(item,index) in avatar" :key="index" class="game-icon">
					<image :src="avatar[index]" class="game-prefix" />
					1223
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action card-title">
				活动公告
			</view>
			<view class="action">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="gift/index" open-type="redirect">
					<text class="cu-tag bg-red radius">公告</text>
					<text class="text-grey" style="margin-left: 8rpx;">传奇公告传奇公告传奇公告传奇公告</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [
					{
						id: 0,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					}, {
						id: 1,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					}, {
						id: 2,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					}, {
						id: 3,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					}, {
						id: 4,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					}, {
						id: 5,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
					}, {
						id: 6,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
					},
				],
				avatar:[
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
					],
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
			}
		}
	}
</script>

<style>
	.logo {
		background-color: red;
		width: 100%;
		height: 100rpx;
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
		overflow: hidden !important;
		height: 200rpx !important;
	}
	.game-prefix {
		width: 160rpx;
		height: 160rpx;
	}
	
	.rank-info {
		margin-top: 10rpx;
		height: 70rpx;
		overflow: auto;
	}
</style>
