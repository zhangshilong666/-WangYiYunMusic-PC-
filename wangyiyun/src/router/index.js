import Vue from 'vue'
import VueRouter from 'vue-router'
import FaxianRouter from './faxian'
Vue.use(VueRouter)

  const routes = [
	  {
		  path:'/',
		  redirect:{
			  name:'faxian'
		  },
		 
	  },
	  {
		  path:'/faxian',
		  component:()=>import('../views/faxian'),
		  children:FaxianRouter,
		  name:'faxian'
	  },
	  {
		  path:'/my',
		  component:()=>import('../views/my'),
		  name:'my'
	  },
	  {
		  path:'/login',
		  component:()=>import('../views/login')
	  }
]

const router = new VueRouter({
  routes
})

export default router
