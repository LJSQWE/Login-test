<template>
   <!-- <div class="wrapper">
    <img src="http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg" class="wrapper__img">
    <div class="wrapper__input">
       <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
    />
    </div>
    <div class="wrapper__input">
       <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
    />
    </div>
     <div class="wrapper__login-button" >登录</div> 
    <el-button type="primary" class="wrapper__login-button" >Primary</el-button>
    <div class="wrapper__login-link bg-red-400">立即注册</div>
  </div> -->
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &__img{
    display: block;
    margin: 0 auto 10px auto;
    width: 80px;
    height: 80px;
  }
  &__input {
    height: 38px;
    margin: 0 40px 16px 40px;
    padding: 0 16px;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    border-radius: 6px;

    &__content {
      height: 38px;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: coral;
    }
  }
  &__login-button {
    display: block;
    margin: 0 auto;
    width: 100px;
    color: #fff;
    font-size: 16px;
  }
  &__login-link {
    width:100px ;
    text-align: center;
    font-size: 14px;
    margin: 10px auto;;
    color: white;
  }
}
</style>