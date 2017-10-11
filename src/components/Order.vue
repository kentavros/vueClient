<template>
  <div class="container center-block">
    <div v-if="success != 'success'">
  <div class="form-order">
      <fieldset disabled>
      <div class="form-group row">
          <label for="id_car" class="col-2 col-form-label">ID CAR</label>
          <div class="col-10">
              <input class="form-control" type="text" id="id_car" v-model="car.id">
          </div>
      </div>
      
      <div class="form-group row">
          <label for="inputFname" class="col-2 col-form-label">Name</label>
          <div class="col-10">
              <input class="form-control" type="text" id="inputFname" v-model="login">
          </div>
      </div>
      </fieldset>
      <button type="submit" class="btn btn-success" v-on:click="getOrder()">Submit</button>
      <router-link to="/"><button type="submit" class="btn btn-primary">Abort</button></router-link>
  </div>
    <div class="about">
      <h3>
      <p>You want to order a car:</p>
     Model - {{car.model}},<br>
     Brand - {{car.brand}},<br>
     Price - {{car.price}}<br>
      </h3>
    </div>
  </div>
  <div v-else>
    <h2>Thank you, soon representatives of our company will contact you<br>
      <router-link to='/'>To main</router-link>
      </h2>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'order',
  data () {
    return {
      car: {},
      login: '',
      id_user: '',
      config: {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
      success: ''
    }
  },
  methods:{
    isEmpty: function(obj){
        for (var key in obj) {
            return false;
        }
        return true;
    },
    getCar: function()
    {
      var self = this
      if (JSON.stringify(self.$route.params.obj) != '"[object Object]"')
      {
        self.car = self.$route.params.obj
        localStorage['car'] = JSON.stringify(self.car)
      }
      else{
        self.car = JSON.parse(localStorage['car'])
      }

    },
    getLogin: function(){
      var self = this
      if (localStorage['login'])
      {
        self.login = JSON.parse(localStorage['login'])
        return true
      }
      return false
    },
    getIdUser: function(){
      var self = this
      if (localStorage['id'])
      {
        self.id_user = JSON.parse(localStorage['id'])
        return true
      }
      return false
    },
    getOrder: function(){
      var self = this
      var data = new FormData();
        data.append('id_car', self.car.id);
        data.append('id_user', self.id_user);
        // axios.post('http://rest/user6/rest_task1/client/api/orders/', data, self.config)
        axios.post('http://192.168.0.15/~user6/REST/client/api/orders/', data, self.config)
        .then(function (response) {
          // console.log(response);
          if (response.data == 1){
            self.success = 'success'
          }
          else 
          {
            alert(response.data)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created(){
    this.getCar()
    this.getLogin()
    this.getIdUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-order{
  width: 150px;
  float: left;
}

.about{
  width: 500px;
  margin-left: 200px;
}

h2{
  color: darkblue;
  text-align: center;
  width: 1000px;
}
</style>
