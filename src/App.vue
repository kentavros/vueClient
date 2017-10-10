<template>
  <div id="app">
    <h1 class="logo">Cars shop</h1>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'app'
  // data() {
  //   return {
  //       test: '',
  //       errors: [],
  //       config: {
  //         headers: {'Content-Type': 'application/x-www-form-urlencoded'
  //         }
  //       },
  //   }
  // },

  // methods: {
      // testGet: function(){
      //     axios.get('http://rest/user6/rest_task1/client/api/cars/', this.config)
      //     // axios.get('http://192.168.0.15/~user6/REST/client/api/cars/', this.config)
      //       .then(function (response) {
      //       console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // },
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
      // testPut: function()
      // {
      //   axios.put('http://rest/user6/rest_task1/client/api/users/', {
      //     // axios.put('http://192.168.0.15/~user6/REST/client/api/users/', {
      //     login: 'aaaaaa',
      //     pass: '123456'
      //   }, this.config)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // }
      // testDelete: function(){
      //       axios.delete('http://rest/user6/rest_task1/client/api/users/1/', this.config)
      //     // axios.delete('http://192.168.0.15/~user6/REST/client/api/users/1/')
      //       .then(function (response) {
      //       console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // },
  // deleteFun: function(){
  //         axios.delete('http://rest/user6/rest_task1/client/api/users/1/', this.config)
  //         // axios.delete('http://192.168.0.15/~user6/REST/client/api/users/', this.config)
  //           .then(function (response) {
  //           console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // } 
  // },
  // created(){
    // this.deleteFun()
    // this.testGet()
    // this.testPost()
    // this.testPut()
    // this.testDelete()
    
//   }
}
</script>

<style>
body{
      background: aliceblue;
}
#app{
  width: 1000px;
  margin: auto;
}
.logo{
    text-align: center;
    color: darkblue;
    margin-bottom: 15px;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
