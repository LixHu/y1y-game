<template>
	<view class="header-content">
		<view v-if="userInfo.id">
			<view class="cu-avatar lg round avatar" :style="{ backgroundImage: `url(${userInfo.portrait})`}"></view>
			<view class="grid col-1 text-left userinfo">
				<text class="text-bold">{{ userInfo.wechaname }}</text>
				<text>uid: {{ userInfo.id }}</text>
			</view>
			<view class="right-link">
				<text class="text-gray">积分说明？</text>
			</view>
		</view>
		<view v-else>
			<view class="cu-avatar xl round avatar-not-login">
				<view class="cu-tag badge bg-grey login-btn">点击登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		created() {
			this.getUserInfo()
		},
		data() {
			return {
			};
		},
		methods: {
			...mapMutations([
				'setInfo'
			]),
			getUserInfo() {
				this.$api.user.getUserInfo().then((res) => {
					if(res.status === 1001) {
						this.setInfo(res.data)
					} 
				})
			}
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
		background-size: 100% 100%;
	}
	
	.avatar-not-login {
		position: absolute;
		top: 60rpx;
		left: calc(50% - 60rpx);
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
	
	.login-btn {
		top: 45rpx;
		right: 5rpx;
		height: 40rpx;
		width: 120rpx;
	}
</style>
