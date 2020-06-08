import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import "../node_modules/todomvc-app-css/index.css"

import "../node_modules/todomvc-common/base.css"


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      todos:[
        {id:1,todoName:"恰饭",completed:true},
        {id:2,todoName:"困告",completed:true},
        {id:3,todoName:"敲代码",completed:false}

      ]
    },
    mutations:{
      insert1(state,data){
          state.todos.push(data)
      },
      delete1(state,id){
        for(let i=0;i<state.todos.length;i++){
          if(state.todos[i].id == id){
            state.todos.splice(i,1)
          }
        }
      },
      change(state){
        console.log(state.completed=true)
      

      },
      updata1(){
        
      }
    }

})

Vue.directive('focus',{
  inserted :function (el){
        el.focus
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
