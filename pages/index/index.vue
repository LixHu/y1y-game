<template>
	<view>
		<view style="padding-bottom: 100rpx;">
			<game v-if="PageCur=='game'"></game>
			<gift v-if="PageCur=='gift'"></gift>
			<my v-if="PageCur=='my'"></my>
			<service v-if="PageCur=='service'"></service>
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="game">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/game' + [PageCur=='game'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='game'?'text-green':'text-gray'">游戏</view>
			</view>
			<view class="action" @click="NavChange" data-cur="gift">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/gift' + [PageCur=='gift'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='gift'?'text-green':'text-gray'">福利</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/my' + [PageCur=='my'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='my'?'text-green':'text-gray'">我的</view>
			</view>
			<view class="action" @click="NavChange" data-cur="service">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/service' + [PageCur=='service'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='service'?'text-green':'text-gray'">客服</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'game'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style scoped>
	.page-icon {
		width: auto !important;
		left: 5px;
	}
</style>
