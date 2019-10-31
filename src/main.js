import Vue from 'vue'
import App from './App.vue'

import Catalog from './components/Catalog.vue'
import JwPagination from 'jw-vue-pagination'
import vSelect from 'vue-select'
import RangeSlider from 'vue-range-slider'

Vue.component('jw-pagination', JwPagination)
Vue.component('Catalog', Catalog)
Vue.component('v-select', vSelect)
Vue.component('range-slider', RangeSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
