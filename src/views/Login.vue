<template>
  <el-row class="wrapper ">
    <el-col :lg="16" :md="12" class="wrapper__left">
      <div>
        <div class="wrapper__left__content1 ">欢迎光临</div>
        <div class="wrapper__left__content2 ">开始你的个人博客</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class=" wrapper__right">
      <h2 class="wrapper__right__content ">欢迎回来</h2>
      <div class=" wrapper__right__Login ">
        <span class=" h-[1px] w-16 bg-gray-300"></span>
        <span class="text-gray-300">密码账号登录</span>
        <span class=" h-[1px] w-16 bg-gray-300"></span>
      </div>
      <el-form ref="formRef" :model="form"  :rules="rules">
        <el-form-item class="w-[250px]" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
          type="password"
          show-password 
          placeholder="请输入密码" 
          v-model="form.password" 
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template></el-input>
        </el-form-item>
        <el-form-item class="" >
          <el-button type="primary" @click="onSubmit" class="w-[250px] bg-purple-400" round :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>


<script setup >
import {ref, reactive } from 'vue'
import { Calendar, User, Lock} from '@element-plus/icons-vue'
import { login  } from "~/api"
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import {setToken} from '~/composables/auth'
import {toast} from '~/composables/util'

const formRef =ref(null)
const router = useRouter()
const loading = ref(false);//防止用户因为登录响应慢，从而快速点击登录。默认让他为false

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
});

const rules = {
  username:[
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  password:[
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ]
}

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }else {
      loading.value = true    //我们验证登录之后,请求之前来让loading = true
      login(form.username, form.password)
      .then(res =>{
        if(res.username === form.username && res.password === form.password){
           console.log(res);
        //提示成功
        toast("登录成功")
        //存储token
         setToken(res.token)
        //用户名相关信息
          
        //跳转到后台
        router.push("/")
        } else {
          toast("用户名或者密码错误" , 'error')
        }
      }).catch(err => {

      }).finally(() =>{
        loading.value = false;//不管成功或者失败都要false
      })
    }
  })
}
</script>


<style scoped lang="scss">
.wrapper {
  @apply min-h-screen bg-purple-400;

}

.wrapper__left,
.wrapper__right {
  @apply flex items-center justify-center;
}

.wrapper__right {
  @apply bg-light-200 flex-col;
}

.wrapper .wrapper__left .wrapper__left__content1 {
  @apply font-bold text-5xl text-light-500 mb-4;
}

.wrapper .wrapper__left .wrapper__left__content2 {
  @apply text-gray-100 text-sm;
}

.wrapper .wrapper__right .wrapper__right__content {
  @apply font-bold text-gray-700 text-3xl;
}

.wrapper .wrapper__right .wrapper__right__Login {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}</style>