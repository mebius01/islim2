import Vue from 'vue'
import App from './App.vue'

import Catalog from './components/Catalog.vue'
import JwPagination from 'jw-vue-pagination'
// import vSelect from 'vue-select'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
// import 'vue-select/dist/vue-select.css'

Vue.component('VueSlider', VueSlider)
Vue.component('jw-pagination', JwPagination)
Vue.component('Catalog', Catalog)
// Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
