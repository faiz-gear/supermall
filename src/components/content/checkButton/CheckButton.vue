<template>
	<div class="check-button" :class="{checked:isChecked}">
		<img src="~assets/img/cart/tick.svg"  alt="">
	</div>
</template>

<script>
	export default {
		name: "CheckButton",
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.check-button{
		border-radius:55%;
		border: 2px solid #888888;
		width: 20px;
		height: 20px;
	}
	.checked{
		background-color:red;
		border-color: red;
	}
</style>