<template>
	<view>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item, index) in list" :key="index">
				<view class="content">
					<text class="cu-tag line-cyan sm">普通</text>  
					<text class="text-grey">某某某礼包某某某礼包某某某礼包</text>
				</view>
				<view class="action">
					<button class="cu-btn round bg-red sm shadow">领取</button>
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
				
			};
		}
	}
</script>

<style>

</style>
