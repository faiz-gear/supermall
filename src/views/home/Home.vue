<template>
	<div id="home">
		  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
			<tab-control class="tab-control"
									 :titles="['流行','新款','精选']"
									 @tabClick="tabClick"
									 ref="tabControl1"  v-show="isTabFixed"></tab-control>
			<scroll class="content" ref="scroll"
							:probe-type="3"
							@scroll="contentScroll"
							:pull-up-load="true"
							@pullingUp="loadMore">
				<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
				<RecommendView :recommends="recommends"/>
				<feature-view></feature-view>
				<tab-control class="tab-control"
										 :titles="['流行','新款','精选']"
										 @tabClick="tabClick"
										 ref="tabControl2" ></tab-control>
				<goods-list :goods="showGoods"></goods-list>
			</scroll>
			<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>



	</div>
</template>

<script>
	import HomeSwiper from "./childComps/HomeSwiper";
	import RecommendView from "./childComps/RecommendView";
	import FeatureView from "./childComps/FeatureView";

	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "../../components/content/tabcontrol/TabControl";
	import GoodsList from "../../components/content/goods/GoodsList";
	import Scroll from "../../components/common/scroll/Scroll";
	import BackTop from "../../components/content/backtop/BackTop";

	import {getHomeMultidata,getHomeGoods} from "network/home";
	import {debounce} from "common/utils";


	export default {
		name: "Home",
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			BackTop},
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					'pop':{page: 0,list: []},
					'new':{page: 0,list: []},
					'sell':{page: 0,list: []}
				},
				currentType:'pop',
				isShowBackTop:false,
				tabOffsetTop:0,
				isTabFixed:false,
				saveY:0
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created() {
			//1.请求多个数据
			this.getHomeMultidata()
			//2.请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')

		},
		mounted() {
			//3.监听item中图片加载完成,同时刷新BScroll的滚动高度
			const refresh = debounce(this.$refs.scroll.refresh,200)
			this.$bus.$on('itemimgload',() => {
				// console.log('---');
				refresh()
			})


		},
		methods:{
			/**
			 * 事件监听相关方法
			 */

			tabClick(index){
				// console.log(index);
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},
			backClick(){
				this.$refs.scroll.scrollTo(0,0)
			},
			//显示/隐藏back-top
			contentScroll(position){
				//1.判断BackTop是否显示
				this.isShowBackTop = -(position.y) > 1000

				//2.决定tabControl是否吸顶(position：fixed)
				this.isTabFixed = -(position.y) > this.tabOffsetTop
			 },
			loadMore(){
				// console.log('上拉加载更多');
				this.getHomeGoods(this.currentType)
			},
			swiperImgLoad(){
				//获取tabControl的offsetTop
				//所有的组件都有一个属性$el：用于获取组件中的元素
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			},

			/**
			 * 网络请求相关方法
			 */
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res);
					// this.result = res;
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res => {
					// console.log(res);
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page +=1

					this.$refs.scroll.finishPullUp()
				})
			}
		},
		activated() {
			this.$refs.scroll.scrollTo(0,this.saveY,0)
			this.$refs.scroll.refresh()
			// console.log('actived');
		},
		deactivated() {
			this.saveY = this.$refs.scroll.getScrollY()
			// console.log(this.saveY);
			// console.log('deactived');
		}
	}
</script>

<style scoped>
	#home {
		/*padding-top: 44px;*/
		height: 100vh;
		position: relative;
	}
	.home-nav {
		background-color: red;
		color: #E4E4E4;
		/*position: fixed;*/
		/*left: 0;*/
		/*right: 0;*/
		/*top: 0;*/
		/*z-index: 9;*/
	}
	/*.tab-control{*/
	/*	!*position: sticky;*!*/
	/*	top: 44px;*/
	/*	background-color: #fff;*/
	/*	z-index: 9;*/
	/*}*/
	.content {
		overflow: hidden;

		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tab-control {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
</style>