<template>
<div class="bg-secondary">
  <div id="header" class="bg-dark">
    <h1 class="text-light text-center vert-align">Security Question Checker</h1>
    <p class="text-light text-center vert-align">Security Question Checker is a way for you to check your social medias for information that could be used to answer security questions about you</p>
  </div>
  <div class="d-flex align-items-center justify-content-around">
    <div id="Facebook" class="m-4">
      <a v-if="!this.$store.getters.state.fbID" href="http://localhost:5000/api/users/auth/facebook" class="btn btn-primary">Facebook Login</a>
      <button v-else class="btn btn-success" disabled> Logged In
        <img :src="fbProfilePic">
      </button>
    </div>
    <!-- <div id="Instagram" class="m-4">Instagram Login
      <a class="btn btn-primary">Instagram Login</a>
    </div> -->
    <div id="Twitter" class="m-4">
       <a v-if="!this.$store.getters.state.twID" href="http://localhost:5000/api/users/auth/twitter" class="btn btn-primary">Twitter Login</a>
      <button v-else class="btn btn-success" disabled>Logged In
        <img :src="this.$store.getters.state.twPic" alt="">
      </button>
    </div>
  <div><button class="btn btn-success" @click="startScan()">Scan</button></div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  name: 'login',
  components: {
  },
  data() {
    return{
    }
  },
  methods: {
    async getFBPic () {
      const res = await axios.get(`https://graph.facebook.com/v11.0/${this.$store.getters.state.fbID}/picture?redirect=false&access_token=${this.$store.getters.state.fbToken}`,{withCredentials: false})
      this.$store.commit('setState', {'fbPic': res.data.data.url})
    },
    async startScan () {
      if (this.$store.getters.state.fbID && this.$store.getters.state.fbToken) {
        const fbData = await axios.get('http://localhost:5000/api/scanner/facebook')
        if (fbData.status == 200) {
          this.$store.commit('setReportFB', fbData.data)
        } else console.error('Request Failed')
      } 
      if (this.$store.getters.state.twID) {
        const twData = await axios.get('http://localhost:5000/api/scanner/twitter')
        if (twData.status == 200) {
          this.$store.commit('setReportTW', twData.data)
        } else console.error('Request Failed')
      }
      this.$router.push({ name: 'report'})
    }
  },
  computed: {
    fbProfilePic: function() {
      if (this.$store.getters.state.fbID && !this.$store.getters.state.fbPic) {
        this.getFBPic()
      }
      return this.$store.getters.state.fbPic
    }
  },
  async mounted() {
    const res = await axios.get('http://localhost:5000/api/users/auth')
    if (res.status == 200) {
      this.$store.commit('setState', res.data)
    }
  }
}
</script>

<style>
#header {
  height: 300px;
  text-align: center;
}
#header h1 {
  padding-top: 100px;
  line-height: 51px;
  vertical-align: middle;
}
</style>
