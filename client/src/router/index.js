import Vue from 'vue' 
import Router from 'vue-router' 
// Users 
import UserIndex from '@/components/Users/Index' 
Vue.use(Router) 
export default new Router({ 
routes: [ 
{ 
path: '/users', 
name: 'users', 
component: UserIndex 
} 
] 
}) 