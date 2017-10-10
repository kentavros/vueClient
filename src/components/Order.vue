<template>
  <div class="order">
sss
{{car.model}}
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      car: {}
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

    }
  },
  created(){
    this.getCar()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
