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
    <car :car="car"></car>
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
      cars: []
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
    getCarById: function($id){
      var self = this
      axios.get('http://rest/user6/rest_task1/client/api/cars/' + $id)
          // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/' + $id)
            .then(function (response) {
            // console.log(response.data[0]);
            self.car = response.data[0]            
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },

  created(){
    this.getAllCars()
    // this.getCarById(1)
  },
  components: {
    'Car': Car,
    'loginForm': Login
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
