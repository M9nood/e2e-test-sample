<template>
  <div style="width:600px;margin:auto;text-align:center:background:#bcbcbc">
    <h1>Login</h1>
    <p id="loginFailedMsg" style="color:red">{{loginFailedMsg}}</p>
    <div><input type="text" name="username" v-model="userForm.username" placeholder="Username" ></div>
    <div><input type="password" name="password" v-model="userForm.password" placeholder="Password" ></div>
    <div>
      <button @click="loginHandle" class="login_button">Login</button>
    </div>
  </div>
</template>

<script>
import {getUsers,hasUser} from '@/data/user-data'
export default {
  data() {
    return {
      userForm : {
        username : '',
        password : ''
      },
      loginFailedMsg : ''
    }
  },
  methods : {
    async loginHandle(){
      let validUser = await hasUser(this.userForm.username, this.userForm.password)
      if(validUser){
        this.$router.push({name : 'HomePage'})
      }else{
        this.loginFailedMsg = 'Invalid username or password.'
      }
    }
  }
}
</script>
<style scoped>
input{
    line-height: 25px;
    margin-bottom: 5px;
    min-width: 250px;
    padding: 2px 4px;
    /* border: 1px solid ; */
    /* border-radius: 8px; */

}
.login_button{
  padding: 5px 10px;
  background-color:#3caeda;
  border:0px solid transparent;
}
</style>
