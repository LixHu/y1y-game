<template>
	<view class="padding-sm bg-white">
		<scroll-view :scroll-y="true" @scrolltolower="onScroll" class="scroll-height">
			<GameList :list="searchGameList"></GameList>
		</scroll-view>
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
				this.getGameList()
			}
			let title = ''
			if(type == 'hot') {
				title = '热门推荐'
			}else if(type == 'new') {
				title = '最新上架'
			}
			uni.setNavigationBarTitle({
			    title: title
			});
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
				this.$api.game.getListGame(this.type, this.page, this.pageSize).then((res) => {
					if(res.status === 1001 && res.data) {
						if(this.searchGameList.length > 0) {
							let list = this.searchGameList.concat(res.data)
							this.searchGameList = list
							console.log(this.searchGameList)
						}else {
							this.searchGameList = res.data
						}
					}
				})
			},
			onScroll() {
				this.page += 1
				this.getGameList()
			}
		}
	}
</script>

<style>
	.scroll-height {
		height: 1200rpx;
	}
</style>
