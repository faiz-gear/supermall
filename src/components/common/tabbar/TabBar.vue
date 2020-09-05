<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>

	#tab-bar {
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: -5px;
		box-shadow: 0px -5px 10px rgba(10,10,10,0.2);
	}

</style>