<template>
		<div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
			<div class="info-header">
				<div class="header-title">用户评价</div>
				<div class="header-more">
					更多
					<i class="arrow-right"></i>
				</div>
			</div>
			<div class="info-user">
				<img :src="commentInfo.user.avatar" alt="">
				<span>{{commentInfo.user.uname}}</span>
			</div>
			<div class="info-detail">
				<p>{{commentInfo.content}}</p>
				<div class="info-other">
					<span class="date">{{commentInfo.created | showDate}}</span>
					<span>{{commentInfo.style}}</span>
				</div>
				<div class="info-img">
					<img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
				</div>
			</div>
		</div>
</template>

<script>
	import {formatDate} from "common/utils";

	export default {
		name: "DetailCommentInfo",
		props:{
			commentInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			showDate(value){
				//1.将时间戳转成Date对象
				const date = new Date(value * 1000)

				//2.将date进行格式化
				return formatDate(date,'yyyy-MM-dd hh:mm:ss')
			}
		}
	}
</script>

<style scoped>
	.comment-info{
		padding: 25px 10px;
		border-bottom: 5px solid #f2f5f8;
		font-size: 12px;
	}
	.info-header{
		display: flex;
		justify-content: space-between;
		padding: 10px 5px;
		border-bottom: 1px solid #ececec;
	}
	.info-user{
		padding: 10px 5px;
	}
	.info-user img{
		width: 40px;
		height: 40px;
	}
	.info-user span{
		font-size: 15px;
		position: relative;
		top: -8px;
		margin-left: 10px;
	}
	.info-detail{
		line-height: 18px;
	}
	.info-detail .info-other{
		margin-top: 10px;
	}
	.info-other .date{
		margin-right: 10px;
	}
	.info-img{
		margin-top: 10px;
	}
	.info-img img{
		width: 70px;
		height: 70px;
		margin-right: 5px;
	}
</style>