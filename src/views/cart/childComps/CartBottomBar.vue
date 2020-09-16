<template>
	<div class="bottom-bar">
		<div class="all-check">
			<check-button class="all-check-button" :is-checked="selectAll" @click.native="allCheckClick"/>
			<span>全选</span>
		</div>
		<div class="price">
			合计：{{totalPrice}}
		</div>
		<div class="calculate">
			去计算({{checkLength}})
		</div>
	</div>
</template>

<script>
	import CheckButton from "components/content/checkButton/CheckButton";

	export default {
		name: "CartBottomBar",
		components:{
			CheckButton
		},
		computed:{
			totalPrice(){
				return '￥'+ this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue,item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			checkLength(){
				return this.$store.state.cartList.filter(item => {
					return item.checked
				}).length
			},
			selectAll(){
				// return !(this.$store.state.cartList.filter(item => {return !item.checked}).length)
				if (this.$store.state.cartList.length === 0) {return false}
				else{return !this.$store.state.cartList.find(item => !item.checked)}
			}
		},
		methods:{
			allCheckClick(){
				if (this.selectAll){
					this.$store.state.cartList.forEach(item => {item.checked = false})
				}else {
					this.$store.state.cartList.forEach(item => {item.checked = true})
				}
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		height: 40px;
		background-color: #eeeeee;
		position: relative;
		line-height: 40px;
		display: flex;
		font-size: 14px;
	}
	.all-check{
		display: flex;
		align-items: center;
		margin-left: 10px;
		width: 60px;
	}
	.all-check-button{
		line-height: 20px;
	}
	.price{
		margin-left: 20px;
		flex: 1;
	}
	.calculate{
		width: 80px;
		background-color: red;
		color: #eeeeee;
		text-align: center;
	}
</style>