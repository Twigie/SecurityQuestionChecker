<template>
  <div id="app">
    <navbar/>
    <login/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import login from './views/login.vue'

export default {
  name: 'App',
  components: {
    login,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
