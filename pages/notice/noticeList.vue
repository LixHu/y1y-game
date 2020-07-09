<template>
	<Notice :list="noticeList"/></Notice>
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
				noticeList: []
			}
		},
		methods: {
			getNoticeList() {
				this.$api.game.getNotice().then((res) => {
					if(res.status === 1001) {
						this.noticeList = res.data.placard
					}
				})
			}
		}
	}
</script>

<style>
</style>
