<template>
	<view>
		<HeaderContent />
		<view class="grid col-2 interger-conent">
			<view class="interger">
				<view>
					<view class="inte-num">280</view>
					<text class="text-bold interger-title">我的积分</text>
				</view>
			</view>
			<view class="interger">
				<view>
					<view class="inte-num color-bule"><text class="cuIcon-shopfill"></text></view>
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
					<text class="text-gray">已经连续签到n天</text>
				</view>
			</view>
			<view class="sign-content">
				<view class="grid col-4">
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
					</view>
					<view class="sign-in-desc">
						<view>1</view>
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
			<view class="task-content">
				<view class="grid col-2">
					<view class="task-desc">
						<view style="background-image: url(https://y1y-game.oss-cn-shanghai.aliyuncs.com/tray-play.png)"></view>
					</view>
					<view class="task-desc">
						<!-- <view>456</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="interger-rank bg-white">
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
		</view>
	</view>
</template>

<script>
	import HeaderContent from '../../components/common-header.vue'
	export default {
		components: {
			HeaderContent: HeaderContent
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.interger-conent {
		padding: 20rpx 40rpx 40rpx 40rpx;
		background-color: #FFFFFF;
	}
	.interger > view {
		width: 80%;
		height: 200rpx;
		border: 1px solid #CCCCCC;
		text-align: center;
		margin-left: 20rpx;
	}
	
	.inte-num {
		margin-top: 30rpx;
		color: #e54d42;
		font-size: 50rpx;
	}
	
	.interger-title {
		font-size: 35rpx;
	}
	
	.color-bule {
		color: #1cbbb4;
	}
	.sign-in-desc {
		background-color: #FFFFFF;
	}
	.sign-in-desc > view{
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
</style>