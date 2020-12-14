import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// global components
Vue.component('cbModal', () => import('@/components/cb_modal.vue'))
Vue.component('cbForm', () => import('@/components/cb_form.vue'))

// utils
const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
Vue.prototype.$debounce = debounce

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
