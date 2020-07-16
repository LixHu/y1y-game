<template>
	<scroll-view :scroll-y="true" @scrolltolower="onScrollGet" class="notice-scroll">
		<Notice :list="noticeList"/></Notice>
	</scroll-view>
</template>

<script>
	import Notice from '../../components/notice.vue'
	export default {
		components: {
			Notice
		},
		onLoad() {
			this.getNoticeList()
		},
		data() {
			return {
				noticeList: [],
				page: 1, 
				pageSize: 20,
			}
		},
		methods: {
			getNoticeList() {
				this.$api.game.getNotice(this.page, this.pageSize).then((res) => {
					if(res.status === 1001) {
						if(this.noticeList.length > 0) {
							let notice = this.noticeList.concat(res.data)
							this.noticeList = notice
						}else {
							this.noticeList = res.data
						}
					}else {
						uni.showToast({
							title: '暂无更多数据',
							icon: 'none'
						})
					}
				})
			},
			onScrollGet() {
				this.page++
				this.getNoticeList()
			}
		}
	}
</script>

<style>
	.notice-scroll {
		height: 1300rpx;
	}
</style>
