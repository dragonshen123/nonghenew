// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Resource from 'vue-resource'
import '../static/bootstrap/js/bootstrap.js'
import '../static/bootstrap/css/bootstrap.css'
import common from './util/service/loginService'
Vue.config.productionTip = false
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  request.credentials = true;

  next();

});
Vue.use(Resource)
Vue.use(common)
Vue.prototype.common = common

/* eslint-disable no-new  credientials*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
