import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
// import router from './router'

import { init } from 'emailjs-com';
init(process.env.EMAILJS_USER_ID);



import './main.scss'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

Vue.config.productionTip = false

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key =>
  Vue.component(
    key
      .split('/')
      .pop()
      .split('.')[0],
    files(key).default
  )
)

new Vue({
  i18n,
  // router,
  render: h => h(App)
}).$mount('#app')