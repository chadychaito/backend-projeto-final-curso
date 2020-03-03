import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIOS
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNoYWR5IENoYWl0byIsImVtYWlsIjoiY2hhZHlAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4MzI2MzM4OCwiZXhwIjoxNTgzNTIyNTg4fQ.q-z60RtMLgQqSnxx3AM1bvStCtfAQCzk4LUU5X6T36o'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')