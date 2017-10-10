<template>
  <div class="login">
    <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 200px;
    float: right;
}
</style>
