import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import LoginPage from '@/components/LoginPage.vue'
import Register from '@/components/Registration.vue'
import userdetails from '@/components/userDetails.vue'
import userdetails1 from '@/components/user-details1.vue'
import userdetails2 from '@/components/userdetails2.vue'
import userDashboard from '@/components/UserProfileDashboard.vue'
import dashboard from '@/components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/udashboard',
      name: 'userDashboard',
      component: userDashboard
    },
    {
      path: '/userdetails',
      name: 'userdetails',
      component: userdetails
    },
    {
      path: '/userdetails1',
      name: 'userdetails1',
      component: userdetails1
    },
    {
      path: '/userdetails2',
      name: 'userdetails2',
      component: userdetails2
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
