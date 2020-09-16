export default {
	addCart(context,payload){
		return new Promise((resolve,reject) => {
			//1.查找之前数组中是否有该商品
			let oldItem = context.state.cartList.find(item => item.iid === payload.iid)

			//2.判断oldItem
			if (oldItem){
				// oldItem.count += 1;
				// console.log(oldItem);
				context.commit('addCount',oldItem)
				resolve('当前的商品数量+1');
			}else {
				payload.count = 1;
				// state.cartList.push(payload);
				context.commit('addItem',payload)
				resolve('添加购物车成功');
			}
		})
	}
}