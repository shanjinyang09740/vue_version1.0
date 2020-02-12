<template>
	<div>
		<div class="con">
			<h1>{{profileName}}</h1>
			<span>{{message}}|||{{messageA}}||{{messageB}}</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				message: '此处显示接收的参数',
				messageA: "暂无params参数",
				messageB: "暂无query参数",
				profileName: ''
			}
		},
		methods: {
			update() {
				if (this.$route.params.id) {
					this.messageA = 'params参数:'+this.$route.params.id;
					this.profileName = 'UserProfile2';
				}
				if (this.$route.query.id) {
					this.messageB = 'query参数:'+this.$route.query.id;
					this.profileName = 'UserProfile1';
				}
			},
		},
		mounted() {
			console.log("mounted")
			this.update()
		},
		updated() {
			console.log("updated")

		},
		watch: {

		},
	}
</script>

<style scoped>
	.con {
		width: 400px;
		height: 300px;
		background-color: antiquewhite;
	}
</style>
