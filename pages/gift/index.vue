<template>
	<view>
		<HeaderContent @reload="reload" />
		<view class="grid col-2 interger-conent">
			<view class="interger" @click="goIntegerInfo">
				<view>
					<view class="inte-num">{{ userInfo.integer }}</view>
					<text class="text-bold interger-title">我的积分</text>
				</view>
			</view>
			<view class="interger" @click="goIntegerShop">
				<view>
					<view class="inte-num color-bule"><text class="cuIcon-goods"></text></view>
					<text class="text-bold interger-title">积分商城</text>
				</view>
			</view>
		</view>
		<view class="sign-in">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>每日签到
				</view>
				<view class="action">
					<text class="text-gray">已经连续签到{{ userInfo.signdays }}天</text>
				</view>
			</view>
			<view class="sign-content">
				<view class="grid col-4" @click="signIn">
					<view class="sign-in-desc" v-for="(item, index) in signInList" :key="index">
						<view class="day-desc">
							<text class="day-integer text-black">积分{{ item.integer }}</text>
							<text class="day-num text-red">第{{ item.day }}天</text>
						</view>
						<view class="is-sign-in" v-if="index < userInfo.signdays">
							<text class="text-white">已经签到</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="task bg-white">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="text-orange cuIcon-titles"></text>每日任务
				</view>
				<view class="action">
					<text class="text-gray">完成任务得积分</text>
				</view>
			</view>
			<!-- <view class="task-content">
				<view class="grid col-2">
					<view class="task-desc">
						<view style="background-image: url(https://y1y-game.oss-cn-shanghai.aliyuncs.com/tray-play.png)"></view>
					</view>
					<view class="task-desc">
						<view>456</view>
					</view>
				</view>
			</view> -->
		</view>
		<!-- <view class="interger-rank bg-white">
			<view class="bg-red radius">
				<view class="title bg-yellow radius">积分新榜</view>
				<view class="rank-list">
					<view class="vip-icon">8</view>
					<view class="cu-avatar round avatar"></view>
					<view class="user-name text-yellow">杰瑞</view>
					<view class="inte-desc">获得200000积分</view>
				</view>
				<view class="rank-list">
					<view class="vip-icon">8</view>
					<view class="cu-avatar round avatar"></view>
					<view class="user-name text-yellow">杰瑞</view>
					<view class="inte-desc">获得200000积分</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import HeaderContent from '../../components/common-header.vue'
	import { mapState, mapMutations } from 'vuex'
	
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
				
			})
		},
		components: {
			HeaderContent
		},
		onLoad() {
			this.getSignList()
		},
		data() {
			return {
				signInList: []
			}
		},
		methods: {
			...mapMutations([
				'setInfo'
			]),
			reload() {
				uni.navigateBack({
					delta: 0
				})
			},
			getSignList() {
				this.$api.user.getSignList().then((res) => {
					if(res.status === 1001) {
						this.signInList = res.data
					}
				})
			},
			signIn() {
				this.$api.user.signIn().then((res) => {
					console.log(res)
					if(res.status == 1001 || res.status == 1003) {
						let userInfo = this.userInfo
						userInfo.signdays = res.signDays
						this.setInfo(userInfo)
					}
				})
			},
			goIntegerInfo() {
				uni.navigateTo({
					url: 'integer',
					complete: (e) => {
						console.log(e)
					}
				})
			},
			goIntegerShop() {
				uni.navigateTo({
					url: 'shop',
					complete: (e) => {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style>

	.sign-in-desc {
		background-color: #FFFFFF;
	}
	.sign-in-desc > .day-desc{
		background-image: url(../../static/sign/sign-in.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 80%;
		height: 160rpx;
		margin: 20rpx;
	}
	
	.task-desc > view {
		margin: 20rpx;
		height: 250rpx;
		background-size: 100% 100%;
	}
	
	.interger-rank {
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 40rpx;
	}
	
	.interger-rank > view {
		width: 100%;
		height: 900rpx;
	}
	
	.interger-rank > view > .title {
		width: 30%;
		height: 60rpx;
		line-height: 60rpx;
		position: relative;
		top: -25rpx;
		left: 34%;
	}
	
	.rank-list {
		display: flex;
		margin-top: 20rpx;
	}
	
	.vip-icon {
		width: 70rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-image: url(https://y1y-game.oss-cn-shanghai.aliyuncs.com/star.png);
		background-size: 100% 100%;
		margin: 0 20rpx;
		background-repeat: no-repeat;
	}
	
	.avatar {
		margin: 0 10rpx;
	}
	.user-name {
		text-align: left;
		width: 36%;
		overflow: hidden;
		line-height: 60rpx;
	}
	
	.inte-desc {
		line-height: 60rpx;
	}
	
	.day-desc {
		padding: 20rpx;
	}
	.day-desc > text {
		
		display: block;
		text-align: center;
	}
	.day-integer {
		margin-top: 60rpx;
	}
	
	.is-sign-in {
		width: 80%;
		height: 69%;
		position: relative;
		bottom: 180rpx;
		left: 20rpx;
		background-color: rgba(0,0,0, 0.4);
		text-align: center;
	}
	.is-sign-in > text {
		position: relative;
		top: calc(50% - 12rpx);
	}
</style>