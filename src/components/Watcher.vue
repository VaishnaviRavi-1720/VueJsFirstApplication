<template>
    <div>
      <h1>Vue Watcher Example</h1>
      <p>Counter: {{ counter }}</p>
      <p>Status: {{ status }}</p>
      <button @click="incrementCounter">Increment Counter</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Watcher",
    data() {
      return {
        counter: 0,
        status: "Counter is low",
      };
    },
    watch: {
      counter(newVal) {
        if (newVal >= 10) {
          this.status = "Counter is high";
        } else {
          this.status = "Counter is low";
        }
      },
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #34495e;
  }
  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
  </style>
  