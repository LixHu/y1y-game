<template>
	<view>
		<HeaderContent :reload="reload" />
		<view class="grid col-2 interger-conent">
			<view class="interger" @click="setPageType('integer')">
				<view>
					<view class="inte-num">{{ userInfo.integer }}</view>
					<text class="text-bold interger-title">积分增减明细</text>
				</view>
			</view>
			<view class="interger" @click="setPageType('gift')">
				<view>
					<view class="inte-num color-bule"><text class="cuIcon-shop"></text></view>
					<text class="text-bold interger-title">礼包领取历史</text>
				</view>
			</view>
		</view>
		<view v-if="pageType == 'integer'">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index == navCurrent?'text-orange cur':''" v-for="(item, index) in navConfig" :key="index" @tap="tabSelect(item.type)">
						{{ item.title }}
					</view>
				</view>
			</scroll-view>
			<view class="cu-list menu">
				<view class="cu-item" v-for="(item, index) in integerRecord" :key="index">
					<view class="content">
						<text class="text-black">{{ item.desc }}</text>
						<view class="text-grey">{{ item.add_time }}</view>
					</view>
					<view class="action">
						<text class="text-red text-xl">{{ item.type == 1 ? '-' : '+'}}{{ item.integer }}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="cu-list menu">
				<view class="cu-item" v-for="(item, index) in receiveList" :key="index" v-if="item.giftInfo">
					<view class="content">
						<text class="text-black">{{ item.giftInfo.game_name }}{{ item.giftInfo.giftbag_name}}</text>
						<view class="text-grey">兑换码:{{ item.giftCode }}</view>
						<view class="text-grey">{{ item.add_time }}</view>
					</view>
					<view class="action">
						<button class="cu-btn bg-red round" @click="copyGiftCode(item.giftCode)">复制礼包码</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderContent from '../../components/common-header.vue'
	import { mapState } from 'vuex'
	export default {
		components: {
			HeaderContent
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		onLoad() {
			this.getIntegerRecord(0)
		},
		data() {
			return {
				pageType: 'integer',
				integerRecord: [],
				navConfig: [
					{ title: '获取记录', type: 0 },
					{ title: '兑换记录', type: 1 }
				],
				navCurrent: 0,
				page: 1,
				pageSize: 10,
				receiveList: []
			}
		},
		methods: {
			reload() {
				uni.navigateBack({
					delta: 0
				})
			},
			getIntegerRecord(type) {
				this.$api.user.getIntegerRecord(type, this.page, this.pageSize).then((res) => {
					if(res.status == 1001) {
						let { data } = res
						data.forEach((val, key) => {
							switch(val.status) {
								case '1':
									data[key].desc = '每日签到'
									break
								case '2': 
									data[key].desc = '兑换礼包'
									break
								default:
									data[key].desc = '每日礼包'
									break
							}
						})
						this.integerRecord = data
					}else {
						uni.showToast({
							title: '网络连接失败',
							icon: 'none'
						})
					}
				})
			},
			// 获取礼包领取记录
			getGiftReceive() {
				this.$api.user.getGiftReceive(1, 10).then((res) => {
					this.receiveList = res.data
				})
			},
			tabSelect(current) {
				this.navCurrent = current
				this.getIntegerRecord(current)
			},
			setPageType(type) {
				this.pageType = type
			},
			copyGiftCode(code) {
				uni.setClipboardData({
					data: code,
					success: () => {
						uni.showToast({
							title: '复制成功，请到游戏中领取',
							icon: 'success'
						})
					}
				})
			}
		},
		watch: {
			pageType(newValue, oldValue) {
				this.getGiftReceive()
			}
		}
	}
</script>

<style>
</style>
