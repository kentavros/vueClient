<template>
  <div class="login navbar-form navbar-right" role="search">
    <p class="alert-danger">{{errorMsg}}</p>
    
    <div v-if="checkUser == ''">
        <div class="form-group">
            <input v-model="login" type="text" class="form-control" name="username" placeholder="Username">
        </div>
        <div class="form-group">
            <input v-model="pass" type="password" class="form-control" name="password" placeholder="Password">
        </div>
        <button v-on:click="loginFun()" type="submit" class="btn btn-default">Sign In</button>
        <router-link class="reg" to="/registration">Registration</router-link>
    </div>
    
  <div v-else class="form-group">
    <p>Hello <span>{{login}}</span></p>
    <p class="myOrders"><router-link class="reg" to="/orders"><button type="submit" class="btn btn-info">My Orders</button></router-link></p>
    <p class="logout"><button v-on:click="logoutFun()" type="submit" class="btn btn-info">Logout</button></p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'loginForm',
   data(){
      return {
        login: '',
        pass: '',
        id: '',
        hash: '',
        errorMsg: '',
        checkUser: '',
        config: {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      }
   },
  methods: {
    loginFun: function(){
      var self = this
      self.errorMsg = ''
        if (self.login && self.pass)
        {
          // axios.put('http://rest/user6/rest_task1/client/api/users/', {
          axios.put('http://192.168.0.15/~user6/REST/client/api/users/', {
            login: self.login,
            pass: self.pass
          }, self.config)
          .then(function (response) {
            // console.log(response);
            if (response.data.id && response.data.hash)
            {
              self.id = response.data.id
              self.hash = response.data.hash
              localStorage['id'] = JSON.stringify(self.id)
              localStorage['hash'] = JSON.stringify(self.hash)
              localStorage['login'] = JSON.stringify(self.login)
              self.checkUserFun()
              self.$parent.getCheck()
              return true
            }
            else {
              self.errorMsg = response.data
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else
        {
          self.errorMsg = 'Enter data in all fields!'
        }
    }, 
    logoutFun: function()
    {
      var self = this
      if (localStorage['id'] && localStorage['hash'] && localStorage['login'])
      {
        delete localStorage['id']
        delete localStorage['hash']
        delete localStorage['login']
        self.checkUser = ''
        self.$parent.getCheck()
        return true
      }
      else{
        return false
      }
    },
    checkUserFun: function()
    {
      var self = this
      if (localStorage['id'] && localStorage['hash'])
      {
        self.id = JSON.parse(localStorage['id'])
        self.hash = JSON.parse(localStorage['hash'])
        // axios.get('http://rest/user6/rest_task1/client/api/users/' + self.id)
        axios.get('http://192.168.0.15/~user6/REST/client/api/users/' + self.id)
            .then(function (response) {
            if (response.data !== false)
            {
              if (self.hash === response.data)
              {
                  self.checkUser = 1;
                  return true
              }
            }
            })
            .catch(function (error) {
              console.log(error);
            });
      }
      else{
        return false
      }
    },
    getLogin: function(){
      var self = this
      if (localStorage['login'])
      {
        self.login = JSON.parse(localStorage['login'])
      }
    }
  },
  created(){
    this.checkUserFun()
    this.getLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 200px;
    float: right;
}
.reg{
  padding-left: inherit;
}

.logout{
  margin-top: 10px;
}

.myOrders{
  margin-top: 10px;
}

span{
  font-weight: bolder;
  font-size: 18px;
  color: darkblue;
}
</style>
