<template>
  <div class="login" id="login">
    <h3>User name</h3>
    <input id="user-name" v-model="userName"
           placeholder="Enter your user name">
    <p v-show="userName">Your user name is: {{ userName }}</p>

    <h3>Password</h3>
    <input id="password" type="password" 
           v-model="password" 
           placeholder="Enter your password" />
    <p v-show="password">Your password is: {{ password }}</p>
  </div>
</template>

<script>
export default {
  name: 'NamePassword',
  data() {
    return {
      userName: null,
      password: null
    }
  }
}
</script>

<style scoped>
#login {
    margin: 60px;
}
#user-name, #password {
    font-size: 120%;
}
</style>
