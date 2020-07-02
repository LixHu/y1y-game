<template>
	<view>
		<HeaderContent />
		<view class="first-image">
			<image src="https://kantuwan.cn/images/kf_top.png"></image>
		</view>
		<view class="server-qr">
			<image src="" mode=""></image>
		</view>
		<view class="add-server-desc">
			<text class="text-gray">1、长按上方二维码，选择“识别图中二维码”；</text>
			<text class="text-gray">2、添加客服小姐姐,搜索微信号"Yq0011zz"。</text>
		</view>
		<view class="first-image">
			<image src="https://wx.11babay.cn/uploads/A/A741Pku7f62qmGpmrScK/d/5/7/1/5acc535d7fe5d.png" mode=""></image>
		</view>
		<view class="server-qr">
			<image src="" mode=""></image>
		</view>
		<view class="add-server-desc">
			<text class="text-gray">1、长按上方二维码，选择“识别图中二维码”；</text>
			<text class="text-gray">2、添加客服小姐姐,搜索微信号"Yq0011zz"。</text>
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
		border: 1px solid black;
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
