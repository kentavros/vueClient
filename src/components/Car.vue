<template>
  <div v-if="car" class="car">
  <p class="title">Car Selected: {{car.brand}}</p>
    <table class="table">
      <caption></caption>
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
  </div>
</template>

<script>
export default {
  name: 'Car',
  props: ['car']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car{
  text-align: center;
}

.table{
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
</style>
