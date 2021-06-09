<template>
<div class="d-flex flex-column border border-primary">
  <div id="Facebook" class="m-4"> Facebook Login
    <a href="http://localhost:5000/api/users/auth/facebook">Facebook</a>
  </div>
  <div id="Instagram" class="m-4">Instagram Login
    <a class="btn btn-primary">Instagram Login</a>
  </div>
  <div id="Twitter" class="m-4"> Twitter Login
    <a class="btn btn-primary">Twitter Login</a>
  </div>
</div>
</template>

<script>

export default {
  name: 'login',
  components: {
  },
  methods: {
    bob() {
      console.log('SUCCESS')
    }
  }
}
</script>

<style>

</style>
