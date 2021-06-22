<template>
<div class="d-flex flex-column align-items-center justify-content-center">
  <h1>Report</h1>
  <div class="flex-fill w-100 mb-2">
    <h3 class="text-center m-4">Facebook Report</h3>
    <hr>
    <div class="card w-50 mx-auto align-self-center border-danger">
    <div class="card-body">
      <h5 class="card-title">Profile Information</h5>
      Hometown: {{this.$store.getters.report.facebook.hometown}}
      <div>Likes: <div class="d-inline" v-for="(like,index) in this.$store.getters.report.facebook.likes" :key="index">{{like.name}}</div> </div>
    </div>
  </div>
  </div>
  <div v-for="(post, index) in this.$store.getters.report.facebook.posts" :key="index" class="card w-50 align-self-center border-danger mb-2">
    <div class="card-body">
      <h5 class="card-title">Flagged Post</h5>
      <div class="font-italic">"{{post.message}}"</div>
    </div>
  </div>
   <div v-if="this.$store.getters.report.twitter" class="flex-fill w-100 mb-2">
    <h3 class="text-center m-4">Twitter Report</h3>
    <hr>
    <div v-for="(post, index) in this.$store.getters.report.twitter" :key="index" class="card mx-auto w-50 align-self-center border-danger mb-2">
    <div class="card-body">
      <h5 class="card-title">Flagged Post</h5>
      "{{post.text}}"
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'report',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {

  },
  created() {
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
</style>