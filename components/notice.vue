<template>
	<view class="cu-list menu">
		<view class="cu-item arrow" v-for="(item, index) in list">
			<navigator class="content" hover-class="none" url="gift/index" open-type="redirect">
				<text class="cu-tag bg-red radius">公告</text>
				<text class="text-grey notice-text" style="margin-left: 8rpx;">{{ item.title }}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>

	.content {
		display: flex;
	}
	.notice-text {
		max-width: 480rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow:hidden;
	}
</style>
