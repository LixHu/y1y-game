<template>
	<view>
		<HeaderContent :reload="realod" />
		<view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" v-for="(item, index) in giftList" :key="index">
					<view class="cu-avatar round lg gift-icon" :style="{backgroundImage: `url(${item.icon})`}"></view>
					<view class="content">
						<view class="text-grey gift-title">{{ item.game_name }}{{ item.giftbag_name }}</view>
						<view class="text-gray text-sm flex">
							<view class="gift-desc">
								{{ item.desribe }}
							</view> 
						</view>
					</view>
					<view class="action" style="width: 240rpx;">
						<view class="text-red" style="font-size: 40rpx">
							{{ item.integer ? item.integer : 0 }}积分
						</view>
						<view class="text-gray">
							剩余：{{ item.stock }}个
						</view>
					</view>
					<view class="action" style="width: 155rpx;" @click="receiveGift(item.id)">
						<button class="cu-btn round bg-red">去兑换</button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-modal" :class="showModel ? 'show' : '' ">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">领取礼包</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="gift-info">
						<view class="grid col-1 gift-code">
							<text class="text-black">礼包码：</text>
							<text class="text-gray">{{ giftCode }}</text>
						</view>
						<button class="cu-btn bg-red lg" @click="copyCode(giftCode)">复制</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderContent from '../../components/common-header.vue'
	export default {
		components: {
			HeaderContent
		},
		onLoad() {
			this.getGiftList()
		},
		data() {
			return {
				giftList: [],
				showModel: false,
				giftCode: '',
			}
		},
		methods: {
			reload() {
				uni.navigateBack({
					delta: 0
				})
			},
			getGiftList() {
				this.$api.game.getGiftList().then((res) => {
					this.giftList = res.data
				})
			},
			receiveGift(id) {
				this.$api.game.receiveGift(id).then((res) => {
					if(res.status === 1001) {
						this.showModel = true
						this.giftCode = res.giftCode
					}else {
						uni.showToast({
							title: res.msg,
							icon: 'null'
						})
					}
				})
			},
			hideModal() {
				this.showModel = false
			},
			copyCode(code) {
				uni.setClipboardData({
					data: code,
					success: () => {
						uni.showToast({
							title: '复制成功，请到游戏中领取',
							icon: 'success'
						})
						this.showModel = false
					}
				})
			},
		}
	}
</script>

<style>
	.gift-icon {
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.cu-item {
		height: 200rpx !important;
	}
	.gift-title {
		font-size: 33rpx !important;
		
	}
	.gift-desc {
		margin-top: 10rpx;
		height: 140rpx;
		width: 200rpx;
		line-height: 24rpx;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
	}
</style>
