<template>
	<view>
		<HeaderContent/>
		<view class="grid col-4 manage-option">
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-warn"></text></view>
				<text>安全中心</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-mobilefill"></text></view>
				<text>绑定手机</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-my"></text></view>
				<text>实名认证</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>用户条例</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>隐私政策</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-my"></text></view>
				<text>防沉迷</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>防诈骗</text>
			</view>
			<view class="option-item">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-mobile"></text></view>
				<text>添到桌面</text>
			</view>
		</view>
		<view class="login-out">
			<button class="cu-btn bg-red round">退出登录</button>
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
	.menu-item {
		width: 80%;
		height: 140rpx;
	}
	
	.manage-option {
		margin-top: 20rpx;
	}
	
	.option-item {
		padding: 20rpx;
		text-align: center;
	}
	.option-item > text {
		display: block;
	}
	
	.login-out {
		width: 100%;
		height: 120rpx;
		margin-top: 20rpx;
		padding: 20rpx;
	}
	.login-out > button {
		width: 100%;
		height: 100%;
	}
</style>
