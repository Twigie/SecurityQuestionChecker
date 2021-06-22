import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import report from './views/report'
import error from './views/error'

Vue.use(Router)

const routes = [
  
  { path: '/', component: login, name: 'login' },
  { path: '/report', component: report , name: 'report' },
  { path: '*', name: 'error', component: error }

]

export default new Router({
  mode: 'history',
  routes
})