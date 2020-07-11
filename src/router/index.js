import Vue from 'vue'
import Router from 'vue-router'

const School =()=>import("../view/school")
const Dome =()=>import("../view/dome")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/school'
    },
    {
      path: '/school',

      component: School
    },
    {
      path: '/dome',

      component: Dome
    }
  ]
})
