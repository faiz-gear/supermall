<template>
	<div class="toast" v-show="isShow">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default {
		name: "Toast",
		// props:{
		// 	message:{
		// 		type:String,
		// 		default:''
		// 	},
		// 	toastShow:{
		// 		type: Boolean,
		// 		default: false
		// 	}
		// }
		data(){
			return{
				message:'',
				isShow:false
			}
		},
		methods:{
			toastShow(message = '默认文字',duration = 2000){
				this.isShow = true;
				this.message = message;
				setTimeout(() => {
					this.isShow = false;
					this.message = ''
				},duration)
			}
		}
	}
</script>

<style scoped>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: rgba(0,0,0,.7);
		padding: 10px 15px;
		color: #eeeeee;
		font-size: 14px;
		z-index: 99;
	}
</style>