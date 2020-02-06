<template>
  	<div class="login_page fillcontain" style="height:100%">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>后台管理demo</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button ref="loginBtn" type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">提示：此项目仅供参考</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import {login, getAdminInfo} from '@/api'
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
			if (!this.adminInfo.id) {
					this.getAdminData()
    		}
		},
		computed: {
			...mapState(['adminInfo']), //vuex内置方法，获取登录用户信息
		},
		created() {
			this.keyupLogin();
		},
		methods: {
			...mapActions(['getAdminData']), //vuex内置方法，获取登录用户信息
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						// const res = {status:1}
						console.log(this.adminInfo);
						const userArr = [];
						this.adminInfo.forEach(function(item){
							userArr.push(item["username"]);
						});
						if (userArr.indexOf(this.loginForm.username) > -1) {
							var curIndex = userArr.indexOf(this.loginForm.username);
							if(this.loginForm.password === this.adminInfo[curIndex]["password"]){
								this.$message({
			                        type: 'success',
			                        message: '登录成功'
			                    });
								this.$router.push('/msite')
							}else{
								this.$message({
			                        type: 'error',
			                        message: '请输入正确的用户名密码'
			                    });
							}
							
						}else{
							this.$message({
		                        type: 'error',
		                        message: '抱歉，请先注册用户再登录'
		                    });
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
			//添加回车登录事件
			keyupLogin() {
				var $this = this;
				document.onkeydown = function(e){
        			var key = window.event.keyCode;
        			if(key == 13 || key == 100){
	            		$this.$refs.loginBtn.$el.click();
	        		}
	        	}
			}
		},
		watch: {
			/*adminInfo: function (newValue){
				if (newValue.id===123456) {
					console.log(newValue.id)
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
					this.$router.push('/msite')
				}
			}*/
		}
	}
</script>

<style lang="less" >
	@import url('../style/mixin');
	.login_page{
		background-color:#324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
