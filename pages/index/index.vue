<template>
	<view>
		
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
