import Vue from 'vue'
import App from './App.vue'

import Catalog from './components/Catalog.vue'
import JwPagination from 'jw-vue-pagination'
import vSelect from 'vue-select'
import VueDropdown from 'vue-dynamic-dropdown'
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'


Vue.component('jw-pagination', JwPagination)
Vue.component('Catalog', Catalog)
Vue.component('v-select', vSelect)
Vue.component('vue-dropdown', VueDropdown)
Vue.component('vue-range-component', VueRangeSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
