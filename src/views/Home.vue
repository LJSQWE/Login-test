<template>
<div class=" bg-red-50">
  <el-button type="primary" @click="set">设置</el-button>
  <el-button  @click="get">读取</el-button>
  <el-button  @click="remove">删除</el-button>
  
</div>
<RouterLink to="/login">登录</RouterLink>
</template>

<style scoped>

</style>
<script setup lang="ts">
  import { useCookies } from '@vueuse/integrations/useCookies'
  const cookie = useCookies()
  console.log(cookie);

  function set() {
    cookie.set("admin-token", "12321321")
  }
  function get() {
   console.log( cookie.get("admin-token"));
  }
  function remove() {
    cookie.remove("admin-token")
  }
</script>