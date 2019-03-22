import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
