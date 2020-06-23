<template>
	<view>
		<game v-if="PageCur=='game'"></game>
		<!-- <components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin> -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="game">
				<text class='text-gray cuIcon-game page-icon'></text>
				<view :class="PageCur=='game'?'text-green':'text-gray'">游戏</view>
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
