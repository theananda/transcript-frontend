import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import VueAnalytics from 'vue-analytics'
import config from './config/index.js'
import VueRouterBackButton from 'vue-router-back-button'

Vue.use(VueAnalytics, {
  id: config.google_analytic_id,
  router
});

Vue.use(VueRouterBackButton, {
    router,
    ignoreRoutesWithSameName: true,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
