import {createRouter,createWebHashHistory} from "vue-router"
import {getToken} from '~/composables/auth'
import {toast} from '~/composables/util'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue'),
    beforeEnter (to, from, next) {
      const token = getToken();
      if(token)  {
        next({ name: 'Home' })
        toast("你已登录请不要重复登陆", 'warning')
      } else{
        next()
      } 
    }
  }
]

 const router = createRouter({
  history:createWebHashHistory(),
  routes
})

// 登录的路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken();
  const { name } = to
  const isLoginOrRegister = (name === 'Login' );
  (token || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
