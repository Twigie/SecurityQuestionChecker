<template>
  <div id="app">
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
html {
  background-color: #6c757d;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
