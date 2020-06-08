import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
        routes:[
            {path:'/',redirect:"/all"},
            {path:"/all",component:()=>import('../components/all.vue')},
            {path:"/active",component:()=>import("../components/active.vue")},
            {path:'/completed',component:()=>import("../components/completed.vue")}
        ]
})

export default router


