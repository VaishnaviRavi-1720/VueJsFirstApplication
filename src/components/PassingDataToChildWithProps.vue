<template>
    <div>
      <h1>To-Do List</h1>
      <ul>
        <TodoItem 
          v-for="(task, index) in tasks" 
          :key="index" 
          :task="task"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import TodoItem from "./TodoItem.vue";
  
  export default {
    name: "PassingDataToChildWithProps",
    components: {
      TodoItem,
    },
    data() {
      return {
        tasks: [
          "Complete Vue.js tutorial",
          "Build a to-do list app",
          "Learn about props in Vue.js",
          "Write documentation for the project",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #34495e;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  </style>
  