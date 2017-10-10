<template>
  <div class="title">
    <div>
    <loginForm></loginForm>
    <registretionForm></registretionForm>
    </div>
    <div class="cars">
      <ul class="carsList" v-for="car in cars" >
        <li>
          <span class="carSpan btn" v-on:click="getCarById(car.id)">ID: {{car.id}} Brand: {{car.brand}}
            Model: {{car.model}}</span>
        </li>
      </ul>
    </div>
    <car :car="car"></car>
  </div>
</template>

<script>
import axios from 'axios'
import Car from './Car'
import Login from './Login'
import Registretion from './Registretion'
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
      axios.get('http://rest/user6/rest_task1/client/api/cars/', this.config)
          // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/', this.config)
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
      axios.get('http://rest/user6/rest_task1/client/api/cars/' + $id, this.config)
          // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/', this.config)
            .then(function (response) {
            console.log(response.data[0]);
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
    'loginForm': Login,
    'registretionForm': Registretion
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
