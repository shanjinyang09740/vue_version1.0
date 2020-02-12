import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes
})
router.beforeEach((to, from, next) => {
	if (to.path !== '/edit') {
		if (to.path !== '/login' && to.path !== '/notfound' && sessionStorage.getItem("Check_login") !== 'yes') {
			next({
				replace: true,
				name: 'login'
			})
		} else {
			/* 路由发生变化修改页面title */
			if (to.meta.title) {
				document.title = to.meta.title
			}
			next()
		}

	} else {
		if (JSON.parse(sessionStorage.getItem("Auth_key")) === 'no') {
			//没有权限重定位到其他页面，往往是401页面
			next({
				replace: true,
				name: 'Notfound'
			})
		} else {
			next()
		}
	}
})
export default router
