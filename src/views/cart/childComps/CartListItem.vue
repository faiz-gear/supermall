<template>
	<div class="cart-list-item">
		<div class="item-selector">
			<CheckButton :is-checked="product.checked" @click.native="checkClick"/>
		</div>
		<div class="item-img">
			<img :src="product.image" alt="">
		</div>
		<div class="item-info" >
			<div class="item-top item-title">{{product.title}}</div>
			<div class="item-top item-desc">{{product.desc}}</div>
			<div class="item-bottom">
				<div class="item-price left">￥{{product.price}}</div>
				<div class="item-count right">×{{product.count}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckButton from "components/content/checkButton/CheckButton";

	export default {
		name: "CartListItem",
		components:{
			CheckButton
		},
		props:{
			product:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			checkClick(){
				this.product.checked = !this.product.checked
			}
		}
	}
</script>

<style scoped>
	.cart-list-item{
		width: 100%;
		height: 120px;
		display: flex;
		padding: 10px;
		border-bottom: 1px solid #888888;
	}
	.item-selector{
		width: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img img{
		width: 80px;
		height: 100px;
		border-radius: 10%;
		margin-left: 10px;
	}
	.item-info{
		font-size: 12px;
		margin-left: 10px;
		width: 15em;
	}
	.item-top{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item-title{
		font-size: 15px;
	}
	.item-desc{
		margin-top: 15px;
		color: #888888;
	}
	.item-bottom{
		margin-top: 40px;
		font-size: 15px;
	}
	.item-price{
		color: red;
	}
</style>