<template>
  <div v-if="car != ''" class="car">
  <p class="title">Car Selected: {{car.brand}}</p>
    <table class="table">
      <tbody>
      <tr>
        <th>Model</th><td>{{car.model}}</td>
      </tr>
      <tr>
        <th>Year</th><td>{{car.year}}</td>
      </tr>
      <tr>
        <th>Engine</th><td>{{car.engine}}</td>
      </tr>
      <tr>
        <th>Color</th><td>{{car.color}}</td>
      </tr>
      <tr>
        <th>Max speed</th><td>{{car.max_speed}}</td>
      </tr>
      <tr>
        <th>Price</th><td>{{car.price}}</td>
      </tr>
      </tbody>
    </table>
    <div class="btnPreOr" v-if="checkUser != ''">
        <router-link :to="{name: 'order', params: { obj: car }}"><button class="btn alert-warning">Pre-order this Car</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Order from './Order'
export default {
  name: 'Car',
  props: ['car', 'checkUser']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car{
  text-align: center;
}

.table {
  width: 500px;
  margin: auto;
}

.table tr th{
  text-align: center;
}

.title{
  color: darkturquoise;
  font-size: 18px;
  font-weight: bold;
}
.btnPreOr{
  width: 500px;
  float: right;
  margin-top: 10px;
}
</style>
