<template>
	<view class="padding-sm bg-white">
		<GameList :list="searchGameList"></GameList>
	</view>
</template>

<script>
	import GameList from '../../components/GameList.vue'
	export default {
		components: {
			GameList: GameList
		},
		onLoad(option) {
			this.keyword = option.keyword
			this.getSearchRes()
		},
		data() {
			return {
				searchGameList: [],
				keyword: ''
			}
		},
		methods: {
			getSearchRes() {
				this.$api.game.getSearchValue(this.keyword).then((res) => {
					if(res.status === 1001) {
						this.searchGameList = res.data
					}else {
						uni.showToast({
							title: '搜索不到内容',
							icon: 'none'
						})
					}
				})
			},
		}
	}
</script>

<style>
</style>
