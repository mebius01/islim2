import Vue from 'vue'
import App from './App.vue'

import VueLodash from 'vue-lodash'

import Catalog from './components/Catalog.vue'

const options = { name: 'lodash' }
Vue.use(VueLodash, options)

Vue.component('Catalog', Catalog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
