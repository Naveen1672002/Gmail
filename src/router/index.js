import { createRouter, createWebHistory } from 'vue-router'
import signIn from '../components/SignIn.vue'
import password from '../components/password.vue'
import chooseSignin from "../components/chooseSignin.vue"
import createAccount from "../components/createAccount.vue"
import forgotPassword from "../components/forgotPassword.vue"
import forgotChoose from "../components/chooseforgot.vue"
import forgotMail from "../components/forgotMail.vue"
import mainPage from "../components/mainPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path:'/password/:id',
      name: 'password',
      component: password
    },
    {
      path: '/choose',
      name:'choose',
      component: chooseSignin
    },
    {
      path:'/createAccount',
      name: 'createAccount',
      component : createAccount
    },
    {
      path:'/forgotPassword/:id',
      name:'forgotPassword',
      component: forgotPassword
    },{
      path:'/forgotPasswordChoose',
      name:'forgotPasswordChoose',
      component: forgotChoose
    },{
      path:'/forgotMail',
      name:'forgotMail',
      component: forgotMail
    },{
      path:'/mainPage',
      name:'mainPage',
      component:mainPage
    }
    
  ]
})

export default router
