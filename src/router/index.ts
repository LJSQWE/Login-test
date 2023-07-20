import {createRouter,createWebHashHistory} from "vue-router"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  }
]

 const router = createRouter({
  history:createWebHashHistory(),
  routes
})

//登录的路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = ture;
//   //关于下面的问题，就是isLogin要是登录了他还是跳到Login那个界面所以要加一个to.name === "Login"
//   if (isLogin || to.name === "Login") {
//     next()
//   }else{
//     next({name: "Login"})
//   }
// })

export default router
