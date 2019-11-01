import Vue from 'vue'
import App from './App.vue'

import Catalog from './components/Catalog.vue'
import JwPagination from 'jw-vue-pagination'
import vSelect from 'vue-select'


Vue.component('jw-pagination', JwPagination)
Vue.component('Catalog', Catalog)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
