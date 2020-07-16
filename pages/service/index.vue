<template>
	<view class="bg-white">
		<HeaderContent :reload="reload" />
		<view class="first-image">
			<image src="https://kantuwan.cn/images/kf_top.png"></image>
		</view>
		<view class="server-qr">
			<image :src="qrInfo.personQrCode"></image>
		</view>
		<view class="add-server-desc">
			<text class="text-gray">1、长按上方二维码，选择“识别图中二维码”；</text>
			<text class="text-gray">2、添加客服小姐姐,搜索微信号"{{ qrInfo.personNum }}"。</text>
		</view>
		<view class="first-image">
			<image src="https://wx.11babay.cn/uploads/A/A741Pku7f62qmGpmrScK/d/5/7/1/5acc535d7fe5d.png" mode=""></image>
		</view>
		<view class="server-qr">
			<image :src="qrInfo.publicQrCode" mode=""></image>
		</view>
		<view class="add-server-desc">
			<text class="text-gray">1、长按上方二维码，选择“识别图中二维码”；</text>
			<text class="text-gray">2、关注公众号,搜索公众号"{{ qrInfo.publicAttention }}"。</text>
		</view>
	</view>
</template>

<script>
	import HeaderContent from '../../components/common-header.vue'
	export default {
		components: {
			HeaderContent: HeaderContent
		},
		onLoad() {
			this.getQrcode()
		},
		data() {
			return {
				qrInfo: {}
			}
		},
		methods: {
			reload() {
				uni.navigateBack({
					delta: 0
				})
			},
			getQrcode() {
				this.$api.game.getQrCode().then((res) => {
					if(res.status == 1001) {
						this.qrInfo = res.data
					}
				})
			}
		}
	}
</script>

<style>
	.first-image {
		margin-top: 20rpx;
		padding: 0 80rpx;
	}
	.first-image > image {
		width: 100%;
		height: 180rpx;
	}
	
	.server-qr {
		width: 100%;
		height: 380rpx;
		text-align: center;
		padding: 0 160rpx;
	}
	
	.server-qr > image {
		height: 100%;
	}
	
	.add-server-desc {
		margin-top: 20rpx;
		text-align: center;
	}
	.add-server-desc > text {
		display: block;
	}
</style>
