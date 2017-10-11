<template>
  <div class="registration">
      <p class="alert-danger">{{errorMsg}}</p>
      <div v-if="success !== 'success'">
        <fieldset>
            <div id="legend">
            <legend class="">Client Registration</legend>
            </div>
            <div class="control-group">
            <!-- Username -->
            <label class="control-label"  for="username">Username</label>
            <div class="controls">
                <input v-model="login" type="text" id="username" name="username" placeholder="" class="input-xlarge">
                <p class="help-block">Username can contain any letters or numbers, without spaces and Russion latters</p>
            </div>
            </div>
        
            <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="password">Password</label>
            <div class="controls">
                <input v-model="pass" type="password" id="password" name="password" placeholder="" class="input-xlarge">
                <p class="help-block">Password should be at least 4 characters</p>
            </div>
            </div>
        
            <div class="control-group">
            <!-- Password -->
            <label class="control-label"  for="password_confirm">Password (Confirm)</label>
            <div class="controls">
                <input v-model="passConf" type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge">
                <p class="help-block">Please confirm password</p>
            </div>
            </div>
        
            <div class="control-group">
            <!-- Button -->
            <div class="controls">
                <button v-on:click="registration()" class="btn btn-success">Register</button>
                <router-link to='/'><button class="btn btn-info">Back</button></router-link>
            </div>
            </div>
        </fieldset>
    </div>
    <div v-else class="success">
        <h2>Thank you {{login}}, press link and login to sait</h2>
        <router-link class="link" to='/'>Back to main page</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'registrationForm',
  data(){
      return {
        login: '',
        pass: '',
        passConf: '',
        config: {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
        success: '',
        errorMsg: ''
      }
  },
  methods: {
      registration: function () {
          var self = this
          self.errorMsg = ''
          if (self.login && self.pass && self.passConf)
          {
              if (self.pass.length < 3)
              {
                  self.errorMsg = 'Password should be at least 4 characters'
                  return false
              }
              if(self.pass != self.passConf)
              {
                  self.errorMsg = 'Password fields do not match'
                  return false
              }

              var data = new FormData()
              data.append('login', self.login)
              data.append('pass', self.pass)
                axios.post('http://rest/user6/rest_task1/client/api/users/', data, this.config)
                // axios.post('http://192.168.0.15/~user6/REST/client/api/users/', data, this.config)
                    .then(function (response) {
                    //console.log(response.data);
                    if (response.data === 1)
                    {
                        self.success = 'success'
                    }
                    else
                    {
                        self.errorMsg = response.data
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
          }
          else{
              self.errorMsg =  'Enter data in all fields!'
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 200px;
    float: right;
}
.success{
    color: darkblue;
    text-align: center;
}

.alert-danger{
    text-align: center
}

.link{
    font-size: 18px;
    font-weight: bold;
}
</style>
