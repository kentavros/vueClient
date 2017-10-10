<template>
  <div class="registration">

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
            </div>
            </div>
        </fieldset>
    

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
          }
      }
  },
  methods: {
      registration: function () {
          var self = this
          if (self.login && self.pass && self.passConf)
          {
              if (self.pass.length < 3)
              {
                  alert('Password should be at least 4 characters')
              }
              if(self.pass != self.passConf)
              {
                  alert('Password fields do not match')
              }

              var data = new FormData()
              data.append('login', self.login)
              data.append('pass', self.pass)
                axios.post('http://rest/user6/rest_task1/client/api/users/', data, this.config)
                // axios.post('http://192.168.0.15/~user6/REST/client/api/users/', data, this.config)
                    .then(function (response) {
                    console.log(response.data);
                })
                    .catch(function (error) {
                    console.log(error);
                });
          }
          else{
              alert('Enter data in all fields!')
          }
      }
            // testPost: function()
      // {
      //   var data = new FormData();
      //   data.append('login', 'aaaaaa');
      //   data.append('pass', '123456');
      //   axios.post('http://rest/user6/rest_task1/client/api/users/', data, this.config)
      //   // axios.post('http://192.168.0.15/~user6/REST/client/api/users/', data, this.config)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 200px;
    float: right;
}
</style>
