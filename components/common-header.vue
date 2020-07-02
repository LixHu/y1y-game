<template>
	<view class="header-content">
		<view class="cu-avatar lg round avatar"></view>
		<view class="grid col-1 text-left userinfo">
			<text class="text-bold">杰瑞</text>
			<text>uid: 1234565</text>
		</view>
		<view class="right-link">
			<text class="text-gray">积分说明？</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.header-content {
		width: 100%;
		height: 280rpx;
		background-image: url(https://y1y-game.oss-cn-shanghai.aliyuncs.com/common-bg.jpeg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
	}
	
	.avatar {
		position: absolute;
		top: 60rpx;
		left: 40rpx;
	}
	
	.userinfo {
		position: relative;
		top: 60rpx;
		left: 160rpx;
		height: 120rpx;
		width: 180rpx;
		display: flex;
	}
	
	.userinfo > text{
		line-height: 40rpx;
		flex-wrap: wrap;
	}
	
	.right-link {
		position: absolute;
		right: 40rpx;
		top: 80rpx;
	}
</style>
