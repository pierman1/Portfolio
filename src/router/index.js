import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import About from '@/components/about'
import Contact from '@/components/contact'
import Project from '@/components/project-single'
import News from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projects/:name',
      name: 'Project',
      component: Project
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
