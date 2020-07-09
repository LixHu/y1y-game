<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

	/* 公共样式 */
	.interger-conent {
		padding: 20rpx 40rpx 40rpx 40rpx;
		background-color: #FFFFFF;
	}
	.interger > view {
		width: 80%;
		height: 200rpx;
		border: 1px solid #CCCCCC;
		text-align: center;
		margin-left: 20rpx;
	}

	.inte-num {
		margin-top: 30rpx;
		color: #e54d42;
		font-size: 50rpx;
	}

	.interger-title {
		font-size: 35rpx;
	}
	.color-bule {
		color: #1cbbb4;
	}
	.pagewrap {
		padding: 20rpx;
	}
	.title1 {
		font-size: 50rpx;
		text-align: center;
	}
	.title2 {
		font-size: 40rpx;
		text-align: left;
	}
	.redtxt {
		color: #ED1C24;
	}
	.content {
		text-indent: 1rem;
	}
	
</style>
