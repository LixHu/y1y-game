<template>
	<view>
		<HeaderContent :reload="reload"/>
		<view class="grid col-4 manage-option">
			<view class="option-item" @click="goToSafety">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-warn"></text></view>
				<text>安全中心</text>
			</view>
			<view class="option-item" @click="goToBindPhone">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-mobilefill"></text></view>
				<text>绑定手机</text>
			</view>
			<view class="option-item" @click="goToRealName">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-my"></text></view>
				<text>实名认证</text>
			</view>
			<view class="option-item" @click="goToRegulations">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>用户条例</text>
			</view>
			<view class="option-item" @click="goToPolicy">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>隐私政策</text>
			</view>
			<view class="option-item" @click="goToFCM">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-my"></text></view>
				<text>防沉迷</text>
			</view>
			<view class="option-item" @click="goToFZP">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-form"></text></view>
				<text>防诈骗</text>
			</view>
			<view class="option-item" @click="addToDes">
				<view class="cu-avatar round lg bg-red"><text class="cuIcon-mobile"></text></view>
				<text>添到桌面</text>
			</view>
		</view>
		<!-- <view class="login-out"> -->
			<!-- <button class="cu-btn bg-red round" @click="logOut">退出登录</button> -->
		<!-- </view> -->
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
			reload() {
				uni.navigateBack({
					delta: 0
				})
			},
			goToSafety() {
				uni.showToast({
					title: '功能暂未开放',
					icon: 'none'
				})
			},
			goToBindPhone() {
				window.location.href = `${this.$url}/index.php?g=Game&m=Game&a=bind_mobile`
			},
			goToRealName() {
				window.location.href = `${this.$url}/index.php?g=Game&m=Game&a=verified`
				// uni.navigateTo({
				// 	url: 'bindMobile',
				// 	success: () => {
				// 		console.log('绑定手机')
				// 	}
				// })
			},
			goToRegulations() {
				uni.navigateTo({
					url: 'fcm',
					success: () => {
						console.log('去看条例')
					}
				})
			},
			goToPolicy() {
				uni.navigateTo({
					url: 'yszc',
					success: () => {
						console.log('去看隐私')
					}
				})
			},
			goToFCM() {
				uni.navigateTo({
					url: 'fcm',
					success: () => {
						console.log('去看防沉迷')
					}
				})
			},
			goToFZP() {
				uni.navigateTo({
					url: 'fzp',
					success: () => {
						console.log('去看防诈骗')
					}
				})
			},
			addToDes() {
				uni.showToast({
					title: '功能暂未开放',
					icon: 'none'
				})
			},
			// logOut() {
				
			// }
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
