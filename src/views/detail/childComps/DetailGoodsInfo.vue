<template>
	<div v-if="Object.keys(detailInfo).length !== 0 " class="goods-info">
		<div class="info-desc">
			<div class="start"></div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div class="end"></div>
		</div>
		<div class="info-key">{{detailInfo.detailImage[0].key}}</div>
		<div class="info-list">
			<img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index"  @load="imgLoad">
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
		props:{
			detailInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			imgLoad(){
					this.$bus.$emit('imageLoad')
			}
		},

	}
</script>

<style scoped>
	.desc{
		margin: 15px 0;
		text-indent: 2em;
		font-size: 12px;
	}
	.info-list img {
		width: 100%;
	}
</style>