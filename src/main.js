import Vue from 'vue'
import App from './App.vue'

import Catalog from './components/Catalog.vue'
// import Pagination from './components/Pagination.vue'
// import Paginate from 'vuejs-paginate'
import JwPagination from 'jw-vue-pagination'

Vue.component('jw-pagination', JwPagination)
// Vue.component('paginate', Paginate)
Vue.component('Catalog', Catalog)
// Vue.component('Pagination', Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
