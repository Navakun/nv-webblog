import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/index'
import UserEdit from '@/components/Users/EditUser'
import UserCreate from '@/components/Users/CreateUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import CommentIndex from '@/components/Comments/Index' 
 
// Blogs 
import BlogIndex from '@/components/Blogs/Index' 
import BlogCreate from '@/components/Blogs/CreateBlog' 
import BlogEdit from '@/components/Blogs/EditBlog' 
import BlogShow from '@/components/Blogs/ShowBlog'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    { 
      path: '/blogs', 
      name: 'blogs', 
      component: BlogIndex 
    }, 
    { 
      path: '/blog/create', 
      name: 'blogs-edit', 
      component: BlogCreate 
    }, 
    { 
      path: '/blog/edit/:blogId', 
      name: 'blog-edit', 
      component: BlogEdit 
    }, 
    { 
      path: '/blog/:blogId', 
      name: 'blog', 
      component: BlogShow 
    },
    { 
      path: '/comments', 
      name: 'comments', 
      component: CommentIndex 
    },
  ]
})