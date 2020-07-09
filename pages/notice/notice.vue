<template>
	<view class="container bg-white">
		<view class="title">
			<text class="notice-title">{{ noticeInfo.title }}</text>
		</view>
		<view class="tag cu-bar">
			<view class="cu-tag bg-red action radius">{{ noticeInfo.game_name }}</view>
			<view class="action">更新时间：{{ noticeInfo.create_time }}</view>
		</view>
		<view class="content">
			<text v-html="noticeInfo.content"></text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.noticeId = option.id
			this.getNoticeInfo()
		},
		data() {
			return {
				noticeId: '',
				noticeInfo: []
			}
		},
		methods: {
			getNoticeInfo() {
				this.$api.game.getNoticeInfo(this.noticeId).then((res) => {
					if(res.status === 1001) {
						this.noticeInfo = res.data
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20rpx 40rpx;
	}
	.title {
		text-align: center;
	}
	.notice-title {
		font-size: 48rpx;
	}
</style>
