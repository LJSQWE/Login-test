<template>
<div class=" bg-red-50">

</div>

<RouterLink to="/login">登录</RouterLink>
<el-button type="danger" @click="exit">退出</el-button>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {removeToken} from '~/composables/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
function exit() {
  removeToken()
  router.push("/login")
}

</script>