<template>
<div>
  <div class="d-flex flex-column border border-primary">
    {{fbAccessToken}}
    <div id="Facebook" class="m-4"> Facebook Login
      <a v-if="!fbAccessToken" href="http://localhost:5000/api/users/auth/facebook" class="btn btn-primary">Facebook Login</a>
      <button v-else class="btn btn-success" disabled>Logged In
        <img :src="fbProfilePic" alt="">
      </button>
    </div>
    <div id="Instagram" class="m-4">Instagram Login
      <a class="btn btn-primary">Instagram Login</a>
    </div>
    <div id="Twitter" class="m-4"> Twitter Login
      <a class="btn btn-primary">Twitter Login</a>
    </div>
  </div>
  <div><button class="btn btn-success" @click="startScan()">Scan</button></div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  components: {
  },
  data() {
    return{
    }
  },
  methods: {
    async getUserInfo () {
      const res = await axios.get(`https://graph.facebook.com/v11.0/${this.$store.getters.userProfile.fbID}/picture?redirect=false&access_token=${this.$store.getters.fbToken}`)
      this.$store.commit('setUserProfile', ['fbPic', res.data.data.url])
    },
    async startScan () {
      const res = await axios.get('http://localhost:5000/api/scanner/facebook', {params: {fbID: this.$store.getters.userProfile.fbID, fbToken: this.$store.getters.fbToken}})
      console.log(res)
    }
  },
  computed: {
    fbAccessToken: function() {
      if (this.$store.getters.fbToken && !this.$store.getters.userProfile.fbPic) {
        this.getUserInfo()
      }
      return this.$store.getters.fbToken
    },
    fbProfilePic: function() {
      return this.$store.getters.userProfile.fbPic
    }
  },
  mounted() {
    console.log(document.cookie)
    if (document.cookie) {
      this.$store.commit('setFBToken', document.cookie.split(';')[0].split('FB=')[1])
      this.$store.commit('setUserProfile', ['fbID',document.cookie.split(';')[1].split('FBID=')[1]])
      document.cookie = "FB=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "FBID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }
}
</script>

<style>

</style>
