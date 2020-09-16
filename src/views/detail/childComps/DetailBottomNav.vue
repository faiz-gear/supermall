<template>
	<div class="bottom-bar">
		<div class="bar-item bar-left">
			<div>
				<img src="~assets/img/detail/service.png" alt="">
				<span class="text">客服</span>
			</div>
			<div>
				<img src="~assets/img/detail/shop.png" alt="">
				<span class="text">店铺</span>
			</div>
			<div>
				<img src="~assets/img/detail/collect.png" alt="">
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="bar-item bar-right">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBottomNav",
		methods:{
			addToCart(){
				this.$emit('addToCart')
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		height: 49px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex: 1;
		width: 100%;
		background-color: #fff;
		justify-content: space-between;
		box-shadow: 0px -5px 10px rgba(10,10,10,0.2);
	}
	.bar-item{
		display: flex;
		flex: 1;
		text-align: center;
		font-size: 15px;
	}
	.bar-left div{
		width: 30px;
		margin: 2px 12px;
	}
	.bar-left img{
		height: 25px;
		width: 25px;
	}
	.bar-left span{
		font-size: 12px;
		text-align: center;
	}
	.bar-right{
		font-size: 13px;
	}
	.cart{
		width: 50%;
		height: 100%;
		background-color: yellow;
		padding: 15px 0;
	}
	.buy{
		width: 50%;
		height: 100%;
		background-color: var(--color-high-text);
		padding: 15px 0;
		color: white;
	}
</style>