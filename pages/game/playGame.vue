<template>
	<web-view :src="url" allow="*"></web-view>
</template>

<script>
	export default {
		onLoad(option) {
			this.channel = option.channel
			this.getUrl()
		},
		data() {
			return {
				channel: '',
				url: '',
			}
		},
		methods: {
			getUrl() {
				this.url = `https://docater1.cn/Wap/App/game_new?channel=${this.channel}`
			}
		}
	}
</script>

<style>
</style>
