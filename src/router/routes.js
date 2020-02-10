import Msite from './../page/msite.vue'
import Login from './../page/login.vue'
import Lytzone from './../page/lytzone.vue'
import UserProfile from './../page/UserProfile.vue'
import UserProfile1 from './../page/UserProfile1.vue'
import UserProfile2 from './../page/UserProfile2.vue'
import Lazyload from './../page/lazyload.vue'
import Address from './../page/location/address.vue'
import Notfound from './../page/Notfound.vue'

export default [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/edit',
    name: 'edit',
    meta: {
      title: '编辑用户',
      auths: ['edit']
    },
    component: () => import('./../page/component.vue'),
  },
  {
    path: '/lazyload',
    component: Lazyload,
    meta: {
      title: '懒加载',
    },
  },
  {
    path: '/address',
    component: Address,
    meta: {
      title: '地址',
    },
  },
  {
    path: '/lytzone',
    component: Lytzone,
    children: [{
        // 当 /lytzone/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: '/lytzone/profile',
        name: '/lytzone/profile',
        component: UserProfile
      },
      {
        path: '/lytzone/profile1',
        name: '/lytzone/profile1',
        component: UserProfile1
      },
      {
        path: '/lytzone/profile2',
        name: '/lytzone/profile2',
        component: UserProfile2
      },
    ]
  },
  {
    path: '/msite',
    name: 'msite',
    component: Msite,
    meta: {
      title: '后台管理',

    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/notfound',
    component: Notfound,
    name: "Notfound",
    meta: {
      title: '找不到资源',
    },
  },
]