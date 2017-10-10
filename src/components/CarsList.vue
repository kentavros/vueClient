<template>
  <div class="title">
    <div>
    <loginForm></loginForm>
    </div>
    <div class="cars">
      <ul class="carsList" v-for="car in cars" >
        <li>
          <span class="carSpan btn" v-on:click="getCarById(car.id)">ID: {{car.id}} Brand: {{car.brand}}
            Model: {{car.model}}</span>
        </li>
      </ul>
    </div>
    <div v-if="car == ''">
      <img src="static/Cars.png">
    </div> 
    <car :car="car" :checkUser="checkUser"></car>
  </div>
</template>

<script>
import axios from 'axios'
import Car from './Car'
import Login from './Login'

export default {
  name: 'CarsList',
  data () {
    return {
      car: '',
      checkUser: '',
      cars: [],
      fo: '',
      id: '',
      hash: ''
    }
  },
  methods: {
    getAllCars: function(){
      var self = this
          axios.get('http://rest/user6/rest_task1/client/api/cars/')
          // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/')
            .then(function (response) {
            // console.log(response.data);
            self.cars = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCheck: function(){
      var self = this
      if (localStorage['id'] && localStorage['hash'] && localStorage['login'])
      {
      self.checkUser = 1
      }
      else{
        self.checkUser = ''
      }
    },
    getCarById: function(id){
      var self = this
          axios.get('http://rest/user6/rest_task1/client/api/cars/' + id)
          // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/' + id)
            .then(function (response) {
            // console.log(response.data[0]);
            self.car = response.data[0]            
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    checkUserFun: function()
    {
      var self = this
      if (localStorage['id'] && localStorage['hash'])
      {
        self.id = JSON.parse(localStorage['id'])
        self.hash = JSON.parse(localStorage['hash'])
        axios.get('http://rest/user6/rest_task1/client/api/users/' + self.id)
        // axios.get('http://192.168.0.15/~user6/REST/client/api/users/' + self.id)
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
    }
  },

  created(){
    this.getAllCars()
    this.checkUserFun()
    // this.getCarById(1)
  },
  components: {
    'Car': Car,
    'loginForm': Login,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cars{
 float: left;
 width: 300px;
 overflow: scroll;
 height: 500px;
}

.carsList li{
  list-style-type: none;
}

.carSpan{
  border-color: darkblue;
  margin-bottom: 2px;
}
.title{
  width: 1000px;
}
</style>
