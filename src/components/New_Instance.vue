<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewInstance",
    data() {
      return {
        title: "Welcome to New Instance Component",
        message: "This is the initial message",
      };
    },
    methods: {
      updateMessage() {
        this.message = "The message has been updated!";
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
    font-size: 24px;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #358a6c;
  }
  </style>
  