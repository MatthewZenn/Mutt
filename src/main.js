import Vue from 'vue'
import App from './App.vue'
import VueObserveVisibility from "vue-observe-visibility";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false
Vue.use(VueObserveVisibility)

Vue.use(VueGtag, 
  {  config: 
    { id: "G-8CY9PZ3PLG" 
  }});

new Vue({
  render: h => h(App),
}).$mount('#app')
