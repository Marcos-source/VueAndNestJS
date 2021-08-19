import Vue from 'vue'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NotFound from './components/NotFound.vue'
import Users from './components/Users.vue'
import Create from './components/Create.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.config.productionTip = false

const routes = {
  '/': Users,
  '/create': Create
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
