import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import VuexPersist from 'vuex-persist'

Vue.config.productionTip = false

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage
})

const store = new Vuex.Store({
  state: {
    data: {
      fbToken: '',
      fbID: '',
      fbPic: '',
      twID: '',
      twPic: '',
      igID: '',
      igPic: ''
    },
    report: {
      facebook: null,
      twitter: null
    }
  },
  mutations: {
    setState (state, data) {
      state.data = {...state.data, ...data}
    },
    setReportTW (state, data) {
      state.report.twitter = data
    },
    setReportFB (state, data) {
      state.report.facebook = data
    }
  },
  getters: {
    state (state) {
      return state.data
    },
    report (state) {
      return state.report
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})

// router.beforeEach((to, from, next) => {
//   if(to.path !== '/' && !store.getters.state.fbID) next({ name: 'login'})
//   else next()
// })

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')