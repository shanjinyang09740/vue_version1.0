<template>
	<div>
		<div class="con">
			<h1>userprofile</h1>
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
				messageB: "暂无query参数"
			}
		},
		methods: {
			update() {

				if (this.$route.params.id) {
					this.messageA = this.$route.params.id
				}
				if (this.$route.query.id) {
					this.messageB = this.$route.query.id
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
