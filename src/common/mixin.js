import {debounce} from "./utils";

export const itemListenerMixin = {
	data(){
		return{
			itemImgListener:null,
			refresh:null
		}
	},
	mounted() {
		this.refresh = debounce(this.$refs.scroll.refresh,200)
		this.itemImgListener = () => {
			// console.log('我是混入的内容');
			this.refresh()
		}
		this.$bus.$on('itemImgLoad',this.itemImgListener)

	},
}