<template>
<section class="todoapp">
<header class="header">
<h1>todos</h1>
<input v-focus  class="new-todo" @keyup.13="insert1" v-model="info"  placeholder="What needs to be done?">
</header>

<router-view></router-view>
<footer class="footer">
<!-- This should be `0 items left` by default -->
<span class="todo-count"><strong></strong> item left</span>
<!-- Remove this if you don't implement routing -->
<ul class="filters">
<li>
<router-link :class="selected"  to="/all">All</router-link>
</li>
<li>
<router-link  to="/active">Active</router-link>
</li>
<li>
<router-link  to="/completed">Completed</router-link>
</li>
</ul>
<!-- Hidden if no completed items are left ↓ -->
<button class="clear-completed">Clear completed</button>
</footer>
<footer class="info">
<p>Double-click to edit a todo</p>
<!-- Remove the below line ↓ -->
<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
<!-- Change this out with your name and url ↓ -->
<p>Created by <a href="http://todomvc.com">you</a></p>
<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
</section>
</template>

<script>


export default {

	data(){
		return {
			selected:true, 
			info:''
		}
	},
	methods:{
		insert1(){
				var data = {
					id:Math.random(),
					todoName:this.info,
					completed:false
				}
				this.$store.commit('insert1', data)
				this.info=""
			}
		}
	}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
