<template>
	<view :scroll-y="true" @scrolltolower="onScroll" class="scroll-height">
		<view class="cu-list menu-avatar" v-for="(item, index) in list" :key="index">
			<view class="cu-item">
				<view class="cu-avatar radius lg" :style="{backgroundImage: `url(${item.icon})`}"></view>
				<view class="content">
					<view class="text-grey">{{ item.game_name }}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{ item.introduction }}
						</view> 
					</view>
				</view>
				<view class="action" style="width: 144rpx;">
					<button class="cu-btn round bg-red shadow" @click="goGameInfo(item.id)">开玩</button>
				</view>
			</view>
		</view>
		<view style="text-align: center;">
			-- 暂无更多内容 --
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
				
			};
		},
		methods: {
			goGameInfo(id) {
				uni.navigateTo({
					url: `game_info?gameId=${id}`,
					success: () => {
						console.log('跳转到游戏详情')
					}
				})
			},
		}
	}
</script>

<style>
</style>
