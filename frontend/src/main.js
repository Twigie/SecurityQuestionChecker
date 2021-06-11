import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import axios from 'axios'
import VuexPersist from 'vuex-persist'

Vue.config.productionTip = false

// axios.defaults.withCredentials = true
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage
})

const store = new Vuex.Store({
  state: {
    fbToken: '',
    twToken: '',
    igToken: '',
    userProfile: {
      fbID: '',
      fbPic: '',
      twID: '',
      twPic: '',
      igID: '',
      igPic: ''
    }
  },
  mutations: {
    setFBToken (state, data) {
      state.fbToken = data
    },
    setUserProfile (state, data) {
      state.userProfile[data[0]] = data[1]
    }
  },
  getters: {
    fbToken (state) {
      return state.fbToken
    },
    userProfile (state) {
      return state.userProfile
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')