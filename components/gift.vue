<template>
	<view>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item, index) in list" :key="index">
				<view class="content">
					<text class="cu-tag line-cyan sm">普通</text>  
					<text class="text-grey" style="margin-left: 10rpx;">{{ item.giftbag_name }}</text>
				</view>
				<view class="action">
					<button class="cu-btn round bg-red sm shadow" @click="reGift(item.id)">领取</button>
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
	export default {
		props: ['list'],
		data() {
			return {
				showModel: false,
				giftCode: ''
			};
		},
		methods: {
			reGift(id) {
				this.$api.game.receiveGift(id).then((res) => {
					this.giftCode = res.code
					this.showModel = true
				})
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
			}
		}
	}
</script>

<style>
	.gift-info {
	}
	.gift-code {
		margin-left: 30rpx;
		margin-bottom: 10rpx;
	}
	.gift-code > text{
		font-size: 36rpx;
	}
</style>
