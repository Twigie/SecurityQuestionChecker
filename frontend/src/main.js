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
    }
  },
  mutations: {
    setState (state, data) {
      state.data = {...state.data, ...data}
    }
  },
  getters: {
    state (state) {
      return state.data
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/' && !store.getters.fbToken) next({ name: 'login'})
  else next()
})

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')