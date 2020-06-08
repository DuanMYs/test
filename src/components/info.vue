<template>
<section class="main">
<input id="toggle-all" class="toggle-all" type="checkbox" @click="change">
<label for="toggle-all">Mark all as complete</label>
<ul class="todo-list">
<!-- These are here just to show the structure of the list items -->
<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
<li :class="{completed:item.completed}" v-for="item of data"  :key="item.id">
<!-- class =  "completed "  是用横线样式  状态管理  -->
<div class="view" id="mydiv">
<input class="toggle" type="checkbox" v-model="item.completed" >
<label><span v-text="item.todoName"></span></label>
<button @click="delete1(item.id)" class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li>
</ul>
</section>
</template>

<script>
export default {
    props:['data'],
    methods: {
        delete1(id){
			this.$store.commit("delete1",id)
		},
		change(){
			this.$store.commit("change")
		}
    },

}
</script>

<style>

</style>










