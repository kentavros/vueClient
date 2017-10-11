<template>
  <div class="search">
   <div class="form-serch">
     <p v-if="err != ''" class="alert-danger">{{err}}</p>
        <div class="row">
            <div class="col-md-2">
                <label for="inputYear" class="col-2 col-form-label">Year</label>
                <input v-model="year" type="text" class="form-control" id="inputYear" placeholder="***Examp: 1987">
            </div>
            <div class="col-md-2">
                <label for="inputModel" class="col-2 col-form-label">Model</label>
                <input v-model="model" type="text" class="form-control" id="inputModel" placeholder="Examp: 2108">
            </div>
            <div class="col-md-2">
                <label for="inputEngine" class="col-2 col-form-label">Engine</label>
                <input v-model="engine" type="text" class="form-control" id="inputEngine" placeholder="Examp: 1300">
            </div>
            <div class="col-md-2">
                <label for="inputColor" class="col-2 col-form-label">Color</label>
                <input v-model="color" type="text" class="form-control" id="inputColor" placeholder="Examp: chhery">
            </div>
            <div class="col-md-2">
                <label for="inputSpeed" class="col-2 col-form-label">Max speed</label>
                <input v-model="max_speed" type="text" class="form-control" id="inputSpeed"  placeholder="Examp: 150">
            </div>
            <div class="col-md-2">
                <label for="inputPrice" class="col-2 col-form-label">Price</label>
                <input v-model="price" type="text" class="form-control" id="inputPrice" placeholder="Examp: 1000">
            </div>
            <div class="btnForm">
            <button type="submit" class="btn btn-success" v-on:click="searchByParam()">Search</button>
            <router-link to="/"><button type="submit" class="btn btn-info">Back</button></router-link>
            </div>
        </div>
    </div>
    <div class="cars">
      <ul class="carsList" v-for="car in cars" >
        <li>
          <span class="carSpan btn">ID: {{car.id}} Brand: {{car.brand}}
            Model: {{car.model}}</span> 
            <router-link v-if="checkUser" :to="{name: 'order', params: { obj: car }}">
              <button class="btn alert-warning">Pre-order this Car</button>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      year: '',
      model: '',
      engine: '',
      color: '',
      max_speed: '',
      price: '',
      err: '',
      cars: [],
      checkUser: ''
    }
  },
  methods: {
    searchByParam: function()
    {
      var self = this
      var url = 'http://rest/user6/rest_task1/client/api/cars/'
      // var url = 'http://192.168.0.15/~user6/REST/client/api/cars/'
      if (!self.year)
      {
        self.err = 'Input Year first!'
        return false
      }
      self.err = ''
      url = url + 'year/' + self.year
      if (self.model)
      {
        url = url + '/model/' + self.model
      }
      if (self.engine)
      {
        url = url + '/engine/' + self.engine
      }
      if (self.color)
      {
        url = url + '/color/' + self.color
      }
      if (self.max_speed)
      {
        url = url + '/max_speed/' + self.max_speed
      }
      if (self.price)
      {
        url = url + '/price/' + self.price
      }
      // console.log(url)
      axios.get(url)
            .then(function (response) {
            // console.log(response.data);
            if (response.data == 'Nothing found')
            {
              self.err = response.data
            }
            else{
              self.cars = response.data
            }
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
    this.checkUserFun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  margin-top: 10px;
  margin-left: 5px;
}

.carSpan{
  border-color: darkblue;
  margin-bottom: 2px;
}

.carsList li{
  list-style-type: none;
}

.cars{
  text-align: center;
}
</style>
