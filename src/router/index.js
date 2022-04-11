import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import CreateQuiz from '../views/CreateQuiz.vue'
import login from '../views/login.vue'


Vue.use(Router)
export default new Router({
routes: [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Quiz
  },
  {
    path: '/create',
    name: 'CreateQuiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateQuiz
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  },
 
]
})



