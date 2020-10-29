import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios,Axios)
Vue.prototype.a = document.createElement('AUDIO')


 router.beforeEach((to, from, next) => {
    if(to.name == 'faxian') next({name:'tuijian'})
	next()
 })
 
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

