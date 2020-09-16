export default {
	addCount(state,payload){
		payload.count++
	},
	addItem(state,payload){
		payload.checked = true;
		state.cartList.push(payload)
	}
}