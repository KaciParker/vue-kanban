import Vue from 'vue'
import Router from 'vue-router'
import Boards from 'components/Boards'
import Board from 'components/Board'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import Home from 'components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    },{
      path: '/boards/:id',
      name: 'Board',
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/register',
      name: 'signUp',
      component: SignUp
    }
  ]
})
