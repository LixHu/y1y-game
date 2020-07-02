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
			let keyword = option.keyword
			let type = option.type
			if(keyword) {
				this.keyword = keyword
				this.getSearchRes()
			}
			if(type) {
				this.type = type
				this.getGameList(type)
			}
		},
		data() {
			return {
				searchGameList: [],
				keyword: '',
				page: 1,
				pageSize: 10
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
			getGameList(type) {
				this.$api.game.getListGame(type, this.page, this.pageSize).then((res) => {
					console.log(res)
					this.searchGameList = res.data
				})
			}
		}
	}
</script>

<style>
</style>
