import router from '~/router'
// import {getToken} from '~/composables/auth'
// import {toast} from '~/composables/util'


// router.beforeEach((to, from, next) => {
//   const token = getToken();
//   //关于下面的问题，就是isLogin要是登录了他还是跳到Login那个界面所以要加一个to.name === "Login"
//   if (!token && to.path != "/login") {
//     toast("你还没登录", "warning")
//     return next({path: '/login'})
    
//   }
//   if(token && to.path == "/login"){
//     toast("你已经登录", "warning")
//     return next({path:from.path ? from.path: "/"})
//   }
// })

