<template>
	<div>
		<h1>路由跳转</h1>
		<h2>动态路由匹配</h2>
		嵌套路由userprofile:<router-link to="/lytzone/profile">链接(无参数)</router-link>
		嵌套路由userprofile1:<router-link :to="{path:'/lytzone/profile1',query:{id:11}}">链接(query参数)</router-link>
		嵌套路由userprofile2:<router-link :to="{name:'/lytzone/profile2',params:{id:22}}">链接(params参数)</router-link>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {

			}
		},

		methods: {

		}
	}
</script>

<style scoped>


</style>
